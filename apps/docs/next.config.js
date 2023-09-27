const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	output: 'standalone',
	rewrites: async () => [
		{
			source: '/api/heimdall',
			destination: 'https://api.francismasha.com',
		},
		{
			source: '/api/trace',
			destination: 'https://otelcol.francismasha.com/v1/traces',
		},
	],
};

module.exports = withContentlayer(nextConfig);
