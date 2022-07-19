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
    const [colorLastProd, setLastProdColor] = React.useState('');
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
            setLastProdColor(lastProductDetail.detail.fkcolor.name_color)
        }
        getUsers();
        getProducts();
        getLastProductId();
        getLastUserId();
        console.log('color', colorLastProd)
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
                            title='Detalle último producto'
                            name={'Nombre:   ' + lastProduct.name}
                            description={'Descripción:   ' + lastProduct.description}
                           
                            price={'Precio:  ' + lastProduct.price}
                        />
                        <InfoTab
                            title='Detalle último usuario'
                            name={'Primer nombre: ' + lastUser.firstName}
                            lastName={'Apellido: ' + lastUser.lastName}
                            user={'Usuario: ' + lastUser.logUser}
                            email={'Email: ' + lastUser.email}
                            
                        />
                    </div>

                    <div className="categories">
                        <h3>Categorias</h3>
                        <CardList list={categories} />
                    </div>

                </div>

                <div className="table-panel">
                    <h3>Listado de productos</h3>
                    <Table columns={products} />
                </div>

            </div>

        </>
    );

}

export default Dashboard;