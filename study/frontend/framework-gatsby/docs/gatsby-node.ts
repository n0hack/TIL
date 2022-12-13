import { GatsbyNode } from 'gatsby';

// 사용자가 명시적으로 스키마를 제공하지 않는 한 모든 필드를 추론하므로, 기본적으로 null이 허용된다.
// 하지만 항상 사용할 수 있다고 확신하는 경우 임의의 필드를 명시적으로 입력할 수 있다.
export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
  ({ actions }) => {
    actions.createTypes(`
    type Site {
      siteMetadata: SiteMetadata!
    }

    type SiteMetadata {
      title: String!
    }
  `);
  };
