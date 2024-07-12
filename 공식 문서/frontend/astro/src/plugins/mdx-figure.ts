import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

type O = {
  name: string;
};

type Properties = {
  src: string;
  alt: string;
};

function buildFigure({ properties }: { properties: Properties }) {
  const figure = h('figure', {}, [
    h('img', { src: properties.src, alt: properties.alt }),
    properties.alt && properties.alt.trim().length > 0 ? h('figcaption', properties.alt) : '',
  ]);

  console.log(figure.children[1]);

  return figure;
}

export const mdxFigurePlugin = ({ name }: O) => {
  return () => {
    return function transformer(tree) {
      console.log(tree);
      visit(tree, { tagName: 'p' }, (node, index) => {
        const images = node.children
          .filter((child) => child.tagName === 'img')
          .map((img) => buildFigure({ properties: img.properties }));

        console.log(images.length);

        if (images.length === 0) return;

        tree.children[index] = images[0];

        // console.log(node, index);
      });
    };
  };
};

// function transformer(tree) {

//   visit()

//   function visitor() {}
// }

// function plugin() {
//   return transformer;
// }
