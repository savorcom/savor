import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Hero from '../components/hero';
import Problem from '../components/problem';
import Process from '../components/process';
import Products from '../components/products';
import People from '../components/people';
import Contact from '../components/contact';

const IndexPage = ({ data }) => (
  <Layout menuItems={data.allWpMenu.edges[0].node.menuItems.nodes}>
    <SEO title="Home" />
    <Hero data={data.allWpPage.edges[0].node.HomeHero} />
    <div className="container">
      <Problem data={data.allWpPage.edges[0].node.HomeProblem} />
      <Process data={data.allWpPage.edges[0].node.HomeProcess} />
      <Products data={data.allWpPage.edges[0].node.HomeProducts} />
      <People data={data.allWpPage.edges[0].node.HomePeople} />
      <Contact data={data.allWpPage.edges[0].node.HomeContact} />
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
              heroHeading: PropTypes.string,
              heroCopy: PropTypes.string,
              heroImage: PropTypes.shape({
                gatsbyImage: PropTypes.shape({}),
                altText: PropTypes.string,
              }),
            }),
            HomeProblem: PropTypes.shape({
              problemImage: PropTypes.shape({
                gatsbyImage: PropTypes.shape({}),
                altText: PropTypes.string,
              }),
              problemHeading: PropTypes.string,
              leftColumn: PropTypes.shape({
                problemLeftColumnHeading: PropTypes.string,
                problemLeftColumnCopy: PropTypes.string,
                problemLeftColumnIcon: PropTypes.shape({
                  sourceUrl: PropTypes.string,
                  altText: PropTypes.string,
                }),
                problemLeftColumnIconText: PropTypes.string,
              }),
              rightColumn: PropTypes.shape({
                problemRightColumnHeading: PropTypes.string,
                problemRightColumnCopy: PropTypes.string,
                problemRightColumnIcon: PropTypes.shape({
                  sourceUrl: PropTypes.string,
                  altText: PropTypes.string,
                }),
                problemRightColumnIconText: PropTypes.string,
              }),
            }),
            HomeProcess: PropTypes.shape({
              processHeaderBlock: PropTypes.shape({
                processHeaderBlockCopy: PropTypes.string,
                processHeaderBlockImage: PropTypes.shape({
                  sourceUrl: PropTypes.string,
                  altText: PropTypes.string,
                }),
              }),
              processHeading: PropTypes.string,
              processCopy: PropTypes.string,
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
              peopleImage: PropTypes.shape({
                sourceUrl: PropTypes.string,
                altText: PropTypes.string,
              }),
              peopleCopy: PropTypes.string,
              peoplePrincipals: PropTypes.arrayOf(
                PropTypes.shape({
                  peoplePrincipalImage: PropTypes.shape({
                    sourceUrl: PropTypes.string,
                    altText: PropTypes.string,
                  }),
                  peoplePrincipalName: PropTypes.string,
                  peoplePrincipalTitle: PropTypes.string,
                })
              ),
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
            heroHeading
            heroCopy
            heroImage {
              gatsbyImage(
                breakpoints: [376, 460, 600]
                cropFocus: CENTER
                fit: COVER
                formats: [AUTO, WEBP, AVIF]
                layout: FULL_WIDTH
                placeholder: BLURRED
                width: 600
              )
              altText
            }
            marquee {
              marqueeItem
            }
          }
          HomeProblem {
            problemImage {
              gatsbyImage(
                breakpoints: [376, 769, 1200]
                cropFocus: CENTER
                fit: COVER
                formats: [AUTO, WEBP, AVIF]
                layout: FULL_WIDTH
                placeholder: BLURRED
                width: 1200
              )
              altText
            }
            problemHeading
            leftColumn {
              problemLeftColumnHeading
              problemLeftColumnCopy
              problemLeftColumnIcon {
                sourceUrl
                altText
              }
              problemLeftColumnIconText
            }
            rightColumn {
              problemRightColumnHeading
              problemRightColumnCopy
              problemRightColumnIcon {
                sourceUrl
                altText
              }
              problemRightColumnIconText
            }
          }
          HomeProcess {
            processHeaderBlock {
              processHeaderBlockCopy
              processHeaderBlockImage {
                gatsbyImage(
                  breakpoints: [376, 364]
                  cropFocus: CENTER
                  fit: COVER
                  formats: [AUTO, WEBP, AVIF]
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  width: 376
                )
                altText
              }
            }
            processHeading
            processCopy
            processColumns {
              processColumnIcon {
                sourceUrl
                altText
              }
              processColumnCopy
            }
          }
          HomeProducts {
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
            peopleHeading
            peopleSubheading
            peopleImage {
              gatsbyImage(
                breakpoints: [376, 800]
                cropFocus: CENTER
                fit: COVER
                formats: [AUTO, WEBP, AVIF]
                layout: FULL_WIDTH
                placeholder: BLURRED
                width: 800
              )
              altText
            }
            peopleCopy
            peoplePrincipals {
              peoplePrincipalImage {
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
              peoplePrincipalName
              peoplePrincipalTitle
            }
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
            columns {
              contactColumnHeading
              contactColumnCopy
              contactColumnButtonText
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
