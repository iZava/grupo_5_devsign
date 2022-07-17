import React from "react";
import './dashboard.css';
import InfoTab from "../components/InfoTab/InfoTab";
import CardList from "../components/CardList/CardList";
import Table from "../components/Table/Table";
import Header from "../components/Header/Header";
import { DashboardService } from "../services/dashboardServices";

const Dashboard = () => {

    const [products, setProducts] = React.useState([]);
    const [categories, setCategories] = React.useState([]);
    const [totalUsers, setTotalUsers] = React.useState(0);
    const [totalProducts, setTotalProducts] = React.useState(0);
    const [totalCategories, setTotalCategories] = React.useState(0);
    const [lastUser, setLastUser] = React.useState({});
    const [lastProduct, setLastProduct] = React.useState({});
    React.useEffect(() => {
        const getUsers = async () => {
            const usersData = await DashboardService.getUsers();
            setTotalUsers(usersData.count);
        }
        const getProducts = async () => {
            const productsData = await DashboardService.getProducts();
            setProducts(productsData.products);
            setCategories(productsData.countByCategory);
            setTotalProducts(productsData.count);
            setTotalCategories(productsData.countCategory);
        }
        const getLastUserId = async () => {
            const lastUserData = await DashboardService.getLastUser();
            const lastUserDetail = await DashboardService.getUserDetail(lastUserData.latestUser.id);
            setLastUser(lastUserDetail.detail);
        }
        const getLastProductId = async () => {
            const lastProductData = await DashboardService.getLastProduct();
            const lastProductDetail = await DashboardService.getProductDetail(lastProductData.latestProduct.id);
            setLastProduct(lastProductDetail.detail);
        }
        getUsers();
        getProducts();
        getLastProductId();
        getLastUserId();

    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <div className="multiple-panels">
                    <h3>Totales</h3>
                    <div className="tabs">
                        <div className="top-tab">
                            <InfoTab
                                className="top-tab"
                                title='Total Productos'
                                total={totalProducts}
                            />
                        </div>
                        <div className="top-tab">
                            <InfoTab
                                title='Total Usuarios'
                                total={totalUsers}
                            />
                        </div>
                        <div className="top-tab">
                            <InfoTab
                                title='Total Categorias'
                                total={totalCategories}
                            />
                        </div>

                    </div>
                    <h3>Detalles</h3>
                    <div className="details">
                        <InfoTab
                            title='Deatlle último producto'
                            name={lastProduct.name}
                            price={lastProduct.price}
                        />
                        <InfoTab
                            title='Detalle último usuario'
                            name={'Primer nombre: ' + lastUser.firstName}
                            lastName={lastUser.lastName}
                        />
                    </div>


                    <CardList list={categories} />
                </div>
                <div className="table-panel">
                    <Table columns={products} />
                </div>

            </div>

        </>
    );

}

export default Dashboard;