import React from 'react';
import PropTypes from 'prop-types';

const Column = React.forwardRef(({ title, className, icon: Icon, counts, children, ...props }, ref) => (
  <div ref={ref} {...props}>
    <div className={`border-t-2 p-2 rounded-md ${className}`}>
      <div className="flex justify-between items-center gap-1">
        <div className="flex justify-center items-center gap-1">
          {Icon && <Icon />} {title}
        </div>
        <div>
          {counts}
        </div>
      </div>
    </div>
    <div className="space-y-5 my-5">
      {children}
    </div>
  </div>
));

Column.displayName = 'Column'; 

Column.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.elementType,
  counts: PropTypes.number,
  children: PropTypes.node,
};


export default Column;
