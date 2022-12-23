<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Evercare Users</h3>
  <h5 align="center">Simple user data displaying</h5>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project was build for displaying user list data from a placeholder JSON api.

It uses Next.js framework's built in SSR functionality to fetch data on the server side and then pass it to child components using React Context.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Tailwind][Tailwind-css]][Tailwind-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/kindageek/evercare-users.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the program on using development environment
    ```sh
    npm run dev
    ```
    Or run the program on using production environment
    ```sh
    npm run build
    npm start
    ```
4. Go to http://localhost:3000

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE -->
## Usage

- Go to Home page and click on "Users"
  [![Screen Shot][screenshot-1]][images-src]
  [![Screen Shot][screenshot-2]][images-src]
- Go to /users page to see the list of users
  [![Screen Shot][screenshot-3]][images-src]
- Choose between List view or Table view
  [![Screen Shot][screenshot-4]][images-src]
- On the list view, click on any User to see more details
  [![Screen Shot][screenshot-5]][images-src]

<!-- CONTACT -->
## Contact

Sanzhar Nussipbek - [@kindadev][linkedin-url] - nsanzhar.99@gmail.com

Repository: [https://github.com/kindageek/evercare-users](https://github.com/kindageek/evercare-users)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-url]: https://linkedin.com/in/kindadev
[images-src]: https://github.com/kindageek/evercare-users/tree/main/public/images
[screenshot-1]: public/images/screenshot-1.png
[screenshot-2]: public/images/screenshot-2.png
[screenshot-3]: public/images/screenshot-3.png
[screenshot-4]: public/images/screenshot-4.png
[screenshot-5]: public/images/screenshot-5.png
[Next.js]: https://img.shields.io/badge/next.js-20232A?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwind-css]: https://img.shields.io/badge/TailwindCSS-20232A?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4
[Tailwind-url]: https://tailwindcss.com/
[tRPC-img]: https://img.shields.io/badge/trpc-20232A?style=for-the-badge&logo=trpc&logoColor=2596BE
[tRPC-url]: https://trpc.io
[supabase-img]: https://img.shields.io/badge/supabase-20232A?style=for-the-badge&logo=supabase
[supabase-url]: https://supabase.com
[prisma-img]: https://img.shields.io/badge/prisma-20232A?style=for-the-badge&logo=prisma&logoColor=ffffff
[prisma-url]: https://www.prisma.io
[vercel-img]: https://img.shields.io/badge/vercel-20232A?style=for-the-badge&logo=vercel&logoColor=ffffff
[vercel-url]: https://vercel.com