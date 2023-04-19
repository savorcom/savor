import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Hero from '../components/hero';
import Video from '../components/video';
import Problem from '../components/problem';
import BigTextOnImage from '../components/bigTextOnImage';
import Process from '../components/process';
import Products from '../components/products';
import People from '../components/people';
import Contact from '../components/contact';

const IndexPage = ({ data }) => (
  <Layout
    menuItems={data.allWpMenu.edges[0].node.menuItems.nodes}
    videoUrl={data.allWpPage.edges[0].node.HomeHero.heroVideo.mediaItemUrl}
  >
    <SEO title="Home" />
    <Hero data={data.allWpPage.edges[0].node.HomeHero} />
    <div className="content-wrapper">
      <Video videoUrl={data.allWpPage.edges[0].node.HomeVideo.videoIframeUrl} />
      <div className="container">
        <Problem data={data.allWpPage.edges[0].node.HomeProblem} />
      </div>
      <BigTextOnImage data={data.allWpPage.edges[0].node.HomeBigTextOnImage} />
      <div className="container">
        <Process data={data.allWpPage.edges[0].node.HomeProcess} />
      </div>
      <Products data={data.allWpPage.edges[0].node.HomeProducts} />
      <div className="container bottom-content">
        <People data={data.allWpPage.edges[0].node.HomePeople} />
        <Contact data={data.allWpPage.edges[0].node.HomeContact} />
      </div>
    </div>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    allWpMenu: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            menuItems: PropTypes.shape({
              nodes: PropTypes.arrayOf(
                PropTypes.shape({
                  label: PropTypes.string,
                  path: PropTypes.string,
                })
              ),
            }),
          }),
        })
      ),
    }),
    allWpPage: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            HomeHero: PropTypes.shape({
              heroVideo: PropTypes.shape({
                mediaItemUrl: PropTypes.string,
              }),
              heroHeading: PropTypes.string,
              heroCopy: PropTypes.string,
            }),
            HomeProblem: PropTypes.shape({
              problemHeading: PropTypes.string,
              leftColumn: PropTypes.shape({
                problemLeftColumnHeading: PropTypes.string,
                problemLeftColumnCopy: PropTypes.string,
              }),
              rightColumn: PropTypes.shape({
                problemRightColumnHeading: PropTypes.string,
                problemRightColumnCopy: PropTypes.string,
              }),
            }),
            HomeVideo: PropTypes.shape({
              videoIframeUrl: PropTypes.string,
            }),
            HomeBigTextOnImage: PropTypes.shape({
              backgroundImage: PropTypes.shape({
                mediaItemUrl: PropTypes.string,
              }),
              textLines: PropTypes.arrayOf(
                PropTypes.shape({
                  textLine: PropTypes.string,
                })
              ),
            }),
            HomeProcess: PropTypes.shape({
              processHeading: PropTypes.string,
              processColumns: PropTypes.arrayOf(
                PropTypes.shape({
                  processColumnIcon: PropTypes.shape({
                    sourceUrl: PropTypes.string,
                    altText: PropTypes.string,
                  }),
                  processColumnCopy: PropTypes.string,
                })
              ),
            }),
            HomeProducts: PropTypes.shape({
              productsHeading: PropTypes.string,
              productsCopy: PropTypes.string,
              products: PropTypes.arrayOf(
                PropTypes.shape({
                  productImage: PropTypes.shape({
                    sourceUrl: PropTypes.string,
                    altText: PropTypes.string,
                  }),
                  productTitle: PropTypes.string,
                })
              ),
            }),
            HomePeople: PropTypes.shape({
              peopleHeading: PropTypes.string,
              peopleSubheading: PropTypes.string,
              peopleEmployees: PropTypes.arrayOf(
                PropTypes.shape({
                  peopleEmployeeImage: PropTypes.shape({
                    sourceUrl: PropTypes.string,
                    altText: PropTypes.string,
                  }),
                  peopleEmployeeName: PropTypes.string,
                  peopleEmployeeTitle: PropTypes.string,
                })
              ),
            }),
            HomeContact: PropTypes.shape({
              columns: PropTypes.arrayOf(
                PropTypes.shape({
                  contactColumnHeading: PropTypes.string,
                  contactColumnCopy: PropTypes.string,
                  contactColumnButtonText: PropTypes.string,
                })
              ),
            }),
          }),
        })
      ),
    }),
  }).isRequired,
};

export const query = graphql`
  query {
    allWpMenu {
      edges {
        node {
          menuItems {
            nodes {
              label
              path
            }
          }
        }
      }
    }
    allWpPage {
      edges {
        node {
          HomeHero {
            heroVideo {
              mediaItemUrl
            }
            heroHeading
            heroCopy
          }
          HomeProblem {
            problemSectionId
            problemHeading
            leftColumn {
              problemLeftColumnHeading
              problemLeftColumnCopy
            }
            rightColumn {
              problemRightColumnHeading
              problemRightColumnCopy
            }
          }
          HomeVideo {
            videoIframeUrl
          }
          HomeBigTextOnImage {
            backgroundImage {
              mediaItemUrl
            }
            textLines {
              textLine
            }
          }
          HomeProcess {
            processSectionId
            processHeading
            processColumns {
              processColumnIcon {
                gatsbyImage(
                  cropFocus: CENTER
                  fit: COVER
                  formats: [AUTO, WEBP, AVIF]
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  width: 260
                )
                altText
              }
              processColumnCopy
            }
          }
          HomeProducts {
            productsSectionId
            productsHeading
            productsCopy
            products {
              productImage {
                gatsbyImage(
                  breakpoints: [376, 230]
                  cropFocus: CENTER
                  fit: COVER
                  formats: [AUTO, WEBP, AVIF]
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  width: 376
                )
                altText
              }
              productTitle
            }
          }
          HomePeople {
            peopleSectionId
            peopleHeading
            peopleSubheading
            peopleEmployees {
              peopleEmployeeImage {
                gatsbyImage(
                  breakpoints: [376, 240]
                  cropFocus: CENTER
                  fit: COVER
                  formats: [AUTO, WEBP, AVIF]
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  width: 376
                )
                altText
              }
              peopleEmployeeName
              peopleEmployeeTitle
            }
          }
          HomeContact {
            contactSectionId
            columns {
              contactColumnHeading
              contactColumnCopy
              contactColumnButtonText
              buttonType
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
