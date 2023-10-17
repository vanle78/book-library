backend folder:
1. npm init -y
2. npm i express nodemon
3. 
	MongoDB: npm i mongoose 
	mySql: npm i mysql --save
4. npm i cors
root folder:
1. npm create vite@latest
2. npm i
3. npm run dev
cd frontend:
4. npm install -D tailwindcss postcss autoprefixer
5. npx tailwindcss init -p
6. Your tailwind.config.cjs looks like this for now:
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",    
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
7. Add the statements below to your ./src/index.css file:
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
8. npm i axios react-icons
9. npm i notistack
