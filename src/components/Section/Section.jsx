import PropTypes from 'prop-types';
import sectionStyles from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={sectionStyles.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
