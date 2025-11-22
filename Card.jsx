import React from 'react';

/**
 * Reusable Card component
 * Props:
 * - title: string (optional)
 * - subtitle: string (optional)
 * - image: string (optional) URL for a top image
 * - children: node (content/body)
 * - actions: node (footer actions/buttons)
 * - className: additional classes
 * - href: if provided, wrap card in an anchor
 * - onClick: click handler
 */
const Card = ({
	title,
	subtitle,
	image,
	children,
	actions,
	className = '',
	href,
	onClick,
	...props
}) => {
	const content = (
		<div
			className={`overflow-hidden rounded-xl border border-white/6 bg-white/3 shadow-sm text-white ${className}`.trim()}
			onClick={onClick}
			{...props}
		>
			{image && (
				<div className="w-full h-48 overflow-hidden bg-neutral-800">
					<img src={image} alt={title || 'card-image'} className="w-full h-full object-cover" />
				</div>
			)}

			<div className="p-4">
				{title && <h3 className="text-lg font-semibold mb-1">{title}</h3>}
				{subtitle && <p className="text-sm text-white/80 mb-3">{subtitle}</p>}

				<div className="text-sm text-white/90">{children}</div>
			</div>

			{actions && <div className="px-4 pb-4 pt-2 border-t border-white/6 bg-transparent">{actions}</div>}
		</div>
	);

	if (href) {
		return (
			<a href={href} className="block no-underline" aria-label={title || 'card-link'}>
				{content}
			</a>
		);
	}

	return content;
};

export default Card;

