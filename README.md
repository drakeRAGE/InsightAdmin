# InsightAdmin

This project is an Admin Dashboard built with React, Vite, TailwindCSS, and JavaScript. It features various components including stats cards, charts, tables, and more to manage and visualize data effectively.

## Light Mode 
![image](https://github.com/user-attachments/assets/a371ac0b-5001-494b-8c6b-101b18ef1f7b)


## Dark Mode 
![image](https://github.com/user-attachments/assets/4ecef687-9525-4d3e-99d7-61fa9c868acb)


## Features

- **Stats Cards**: Display key metrics such as total users, orders, products, reviews, sales, and expenses.

- **Charts**: Visualize data with different types of charts.

- **Tables**: Show recent transactions, product lists, customer lists, and more.

- **Dark Mode**: Toggle between light and dark themes.

- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **React**: JavaScript library for building user interfaces.

- **Vite**: Next-generation frontend tooling.

- **TailwindCSS**: Utility-first CSS framework.

- **React Icons**: Include popular icons in your React projects easily.

- **Chart.js and react-chartjs-2**: Includes charts in this project.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/admin-dashboard.git
    cd admin-dashboard
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. Open your browser and go to `http://localhost:3000` to view the dashboard.

## File Structure

```bash
admin-dashboard/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Charts.jsx
│   │   ├── StatsCard.jsx
│   │   ├── OrdersTable.jsx
│   │   ├── ProfilePage.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── DashboardPage.jsx
│   │   ├── PaymentsPage.jsx
│   │   ├── TransactionsPage.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```


## Components

# StatsCard
A reusable component to display a metric with an icon.

```bash
<StatsCard icon={<FaUsers />} title="Total Users" value="1,000" />
```

# Charts
Contains various charts to visualize data.

```bash
<Charts />
```

# OrdersTable
Displays a table of recent orders.

```bash
<OrdersTable orders={orders} />
```

# ProfilePage
Shows detailed information about a user.

```bash
<ProfilePage />
```

## Customization
You can customize the dashboard by modifying the components and styles. The main CSS file is managed by TailwindCSS, and you can update the styles in tailwind.config.js and postcss.config.js.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding standards and conventions.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgements
- React
- Vite
- TailwindCSS
- React Icons
- css
- Copy code

This `README.md` provides a comprehensive overview of your admin dashboard project, including installation instructions, file structure, component details, and contribution guidelines. Adjust the repository URL and any other specific details as needed.
