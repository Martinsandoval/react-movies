import React from "react";

interface Props {
  /**
   * The title of the empty state.
   */
  title: string;
  /**
   * The description of the empty state.
   */
  description: string;
  /**
   * The icon of the empty state.
   */
  Icon: React.ElementType;
}

const EmptyState: React.FC<Props> = ({ title, description, Icon }) => {
  return (
    <div>
      <Icon className="empty-state-icon" />
      <div>
        <p className="text-muted h2 mt-5 font-weight-bold text-break">
          {title}
        </p>
        <small className="text-muted text-break h4">{description}</small>
      </div>
    </div>
  );
};

export default EmptyState;
