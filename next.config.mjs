import withSvgr from 'next-plugin-svgr';

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['cdn.simpleicons.org'],
	},
};

export default withSvgr(nextConfig);
