import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Products = ({ data }) => {
  const { productsHeading, productsCopy, products, productsSectionId } = data;

  return (
    <section className="products" id={productsSectionId}>
      <h2 className="products__heading">{productsHeading}</h2>
      <div
        className="products__copy"
        dangerouslySetInnerHTML={{ __html: productsCopy }}
      />
      <ul className="products__list">
        {products.map((item) => {
          const productImg = getImage(item.productImage);
          return (
            <li key={item.productTitle} className="products__item">
              <GatsbyImage
                className="products__image"
                image={productImg}
                alt={item.productImage.altText}
              />
              <p className="products__title">{item.productTitle}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Products.propTypes = {
  data: PropTypes.shape({
    productsSectionId: PropTypes.string,
    productsHeading: PropTypes.string,
    productsCopy: PropTypes.string,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        product: PropTypes.shape({
          productImage: PropTypes.shape({}),
          productTitle: PropTypes.string,
        }),
      })
    ),
  }).isRequired,
};

export default Products;
