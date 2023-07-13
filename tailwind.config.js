/** @type {import('tailwindcss').Config} */
export default {
   mode: 'jit',
  content: [
    "index.html",
    "./src/Components/NavBar.jsx",
    "./src/App.jsx",
    "./src/main.jsx",
  ],
  theme: {
     extend: { 
        colors: { 
          primary: "blue",
       }
    },
  },
  plugins: [],
};

