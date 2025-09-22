import PropTypes from 'prop-types';
import styles from './ImageWrapper.module.scss';

function ImageWrapper({ width, height, children }) {
  const wrapperDims = {
    width: width,
    height: height,
  };

  return (
    <div style={wrapperDims} className={styles.imageContainer}>
      {children}
    </div>
  );
}

ImageWrapper.propTypes = {
  children: PropTypes.element,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ImageWrapper