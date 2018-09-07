
module.exports = {
	siteMetadata: {
		title: 'Portfolio',
		siteUrl: 'https://andrewrogala.surge.sh',
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://andrewrogala.surge.sh',
				env: {
					production: {
						policy: [{userAgent: '*', allow: '/'}]
					}
				}
			}
		},
		`gatsby-plugin-react-helmet`,
	],
};


