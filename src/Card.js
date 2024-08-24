/* eslint-disable no-inline-comments */
import PropTypes from "prop-types";
import classNames from "classnames";

const Card = ({
  thumbnail,
  title,
  titleUrl,
  thumbnailUrl,
  description,
  footer,
  maxHeight = "auto",
  padding = "p-4",
  thumbnailShape = "rounded-none", // 'circle', 'rounded', 'square'
  thumbnailSize = "w-32 h-32",
}) => {
  // Define the class for thumbnail shape based on props
  const thumbnailClass = classNames(
    thumbnailSize,
    {
      "rounded-full": thumbnailShape === "circle",
      "rounded-lg": thumbnailShape === "rounded",
      "rounded-none": thumbnailShape === "square",
    },
  );

  return (
    <div
      className={`flex bg-card shadow-md rounded-lg overflow-hidden ${padding}`}
      style={{ maxHeight, width: "100%", boxSizing: "border-box" }} // Ensure full width and include padding
    >
      {/* Thumbnail */}
      {thumbnail && (
        <div className="flex-shrink-0 flex items-center justify-center">
          <a href={thumbnailUrl} className="flex-shrink-0">
            <img src={thumbnail} alt={title} className={thumbnailClass} />
          </a>
        </div>
      )}

      {/* Right side: Title, Description, Footer */}
      <div className="flex flex-col justify-center flex-grow ml-4">
        {/* Title */}
        {title && (
          <h2 className="text-2xl font-bold mb-2 text-primary">
            {titleUrl ? (
              <a href={titleUrl}>
                {title}
              </a>
            ) : (
              title
            )}
          </h2>
        )}

        {/* Description */}
        {description && (
          <div className="flex-grow mb-2">
            {typeof description === "string" ? (
              <p className="text-white font-thin">{description}</p>
            ) : (
              description
            )}
          </div>
        )}

        {/* Footer */}
        {footer && (
          <div className="mt-2">
            {typeof footer === "string" ? (
              <p className="text-footer font-thin">{footer}</p>
            ) : (
              footer
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Define prop types to ensure the correct usage of the component
Card.propTypes = {
  thumbnail: PropTypes.string, // Thumbnail image URL
  title: PropTypes.string.isRequired, // Card title
  titleUrl: PropTypes.string, // URL for the title
  thumbnailUrl: PropTypes.string, // URL for the thumbnail
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]), // Description as string or component
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]), // Footer as string or component
  maxHeight: PropTypes.string, // Max height of the card
  minHeight: PropTypes.string, // Min height of the card
  padding: PropTypes.string, // Padding class (e.g., 'p-4')
  thumbnailShape: PropTypes.oneOf(["circle", "rounded", "square"]), // Shape of the thumbnail
  thumbnailSize: PropTypes.string, // Size class for thumbnail (e.g., 'w-32 h-32')
};

export default Card;
