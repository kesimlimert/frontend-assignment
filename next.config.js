/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
	  domains: ['iztek-frontend-assignment.vercel.app'],
	},
	transpilePackages: ['react-slider'],
  }
  
  module.exports = nextConfig