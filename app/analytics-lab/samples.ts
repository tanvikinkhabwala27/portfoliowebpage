export const sampleFiles:Record<string,string>={
'orders.csv':`order_id,customer_id,product_id,product_name,revenue,quantity,channel,order_date\nO-1001,C-01,P-01,Canvas Tote,84,2,Direct,2025-01-04\nO-1002,C-02,P-02,Desk Lamp,129,1,Marketplace,2025-01-07\nO-1003,,P-01,canvas tote,42,1,Direct,2025-01-09\nO-1004,C-01,P-03,Notebook Set ,58,2,Wholesale,2025-02-02\nO-1004,C-01,P-03,Notebook Set ,58,2,Wholesale,2025-02-02\nO-1005,C-03,P-99,Travel Mug,36,1,Direct,2025-02-15\nO-1006,C-04,P-02,Desk Lamp,258,2,Direct,2025-03-01\nO-1007,C-02,P-01,Canvas Tote,84,2,Marketplace,2025-03-18`,
'customers.csv':`customer_id,customer_name,segment,signup_date\nC-01,Aster Co,Small Business,2024-01-12\nC-02,Bright Studio,Consumer,2024-03-08\nC-03,Cedar Works,Small Business,2024-06-19\nC-04,Daylight LLC,Enterprise,2024-08-03`,
'products.csv':`product_id,product_name,category\nP-01,Canvas Tote,Accessories\nP-02,Desk Lamp,Home\nP-03,Notebook Set,Office\nP-04,Travel Mug,Accessories`,
'product_costs.csv':`product_code,unit_cost,effective_date\nP-01,14,2025-01-01\nP-02,61,2025-01-01\nP-03,12,2025-01-01`,
'marketing.csv':`campaign,channel,month,spend\nNew Year,Direct,2025-01,3200\nCreator Test,Marketplace,2025-02,1800\nSpring Launch,Direct,2025-03,4100`,
'returns.csv':`return_id,order_id,product_id,return_date,refund_amount\nR-01,O-1002,P-02,2025-01-18,129\nR-02,O-1005,P-99,2025-02-22,36\nR-03,O-9999,P-04,2025-03-20,42`,
'inventory.csv':`sku,location,on_hand,snapshot_date\nP-01,New York,82,2025-03-31\nP-02,New York,14,2025-03-31\nP-03,Boston,120,2025-03-31\nP-04,Boston,,2025-03-31`
};
export const cleanSample=`order_id,customer_id,revenue,order_date,channel\n1,C01,120,2025-01-01,Direct\n2,C02,85,2025-01-02,Marketplace\n3,C01,64,2025-01-04,Direct\n4,C03,210,2025-01-08,Wholesale`;
