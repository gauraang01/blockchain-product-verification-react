import React, {useState } from 'react'
import './app.css';

const AddProduct = ({account, central}) => {

    const [companyContractAddress, setCompanyContractAddress] = useState('');
    const [productId, setProductId] = useState('');
    const [loading, setLoading] = useState(false);

    const [updateStatus, setUpdateStatus] = useState(false);
    
    function showErrorMessage(error) {
        setLoading(false);
        alert(`An error occurred while connecting to MetaMask: ${error.message}`);
    }

    const handleInput1Change = (e) => {
        setCompanyContractAddress(e.target.value);
      };
    
      const handleInput2Change = (e) => {
        setProductId(e.target.value);
      };


    const addProducts = async () => {
        try{
            const list = JSON.parse("[" + productId + "]");
            if(account && companyContractAddress && list){
                setUpdateStatus("Validate the transaction through your wallet");
                let transaction = await central.addproduct(account, companyContractAddress, list);
                setLoading(true);
                await transaction.wait();
                setUpdateStatus("Products Added");
                setLoading(false);
            }else{
                throw Error('Please check that you are connected to a wallet,and that you have provided all the fields');
            }
        }catch(error){
            console.log(error);
            showErrorMessage(error);
        }
        
    }


    return (
        <div className='AddProduct'>
            <h3 className='Component__title'>Add Products</h3>
            <div className='Component__form'>
                <div className='form__content'>
                    <label className='form__label'>Enter Company contract address</label>
                    <input type="text" className='form__input' value={companyContractAddress} onChange={handleInput1Change} />
                </div>
                <div className='form__content'>
                    <label className='form__label'>Enter Product id</label>
                    <input type="text"  className='form__input' value={productId} onChange={handleInput2Change} />
                </div>
                <button className='button__toggle form__button' onClick={addProducts}>Add Product</button>
                { account ? (
                    <>
                        {loading  ? (
                            <div>Transaction in progress..... It can take a few minutes</div>
                        ) : ( 
                            <p>{updateStatus}</p>
                        )}
                    </>
                ) : (
                    <h2>Connect to a crypto wallet first.......</h2>
                )
                
                }
            </div>
        </div>
    )
}

export default AddProduct;