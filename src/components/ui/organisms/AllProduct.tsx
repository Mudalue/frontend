import React, { useEffect, useState } from 'react';
import { apiRequest } from '../../utils/api';
import Card from '../molecules/Card';

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}

interface CardData {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string;
}

export const AllProduct: React.FC = () => {
    const [data, setData] = useState<CardData[]>([]);

    const getAllProducts = async () => {
        try {
            const response = await apiRequest<Product[]>({}, "/products", "GET");
            // Map the Product[] data to CardData[] with the expected properties
            const mappedData: CardData[] = response?.data.map((product) => ({
                id: product.id,
                title: product.name, // Assuming 'name' is the title
                price: product.price,
                description: product.description, // Assuming 'description' is the description
                images: product.image, // Convert the image string to an array of strings
            }));
            setData(mappedData);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <>
            <h4 className='fw-bold lh-lg my-3'>Explore Our latest drops</h4>
            <div>
                {data && data.length > 0 ? <Card data={data} /> : <p>No data available.</p>}
            </div>
        </>
    );
};
