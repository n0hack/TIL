import { visit } from "unist-util-visit";
import { h } from "hastscript";

const mdxFigurefy = (option) => {
  const className = (option && option.className) || "figurefy";

  const buildFigure = ({ properties }) => {
    const figure = h("figure", { class: className }, [
      h("img", { ...properties }),
      properties.alt &&
      properties.alt.trim().length > 0
        ? h("figcaption", properties.alt)
        : "",
    ]);

    return figure;
  };

  return (tree) => {
    visit(tree, { tagName: "p" }, (node, index) => {
      const images = (node.children)
        .filter((child) => child.tagName === "img")
        .map((img) => buildFigure(img));

      if (images.length === 0) return;

      tree.children?.[index] =
        images.length === 1
          ? images[0]
          : (tree.children[index] = h(
              "div",
              { class: `${className}-container` },
              images
            ));
    });
  };
};

export { mdxFigurefy };
