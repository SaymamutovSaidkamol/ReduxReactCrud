import { FC, memo, useState } from 'react'
import { IStudent } from '../../types'
import { useDispatch } from 'react-redux';
import { remove } from '../../redux/features/student.slice';
import ModalUser from '../modalUser/Modal';

interface Props {
    data: IStudent[] | undefined
}

const Student: FC<Props> = ({ data }) => {
    const [seemore, setSeeMore] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log(data);
    const dispatch = useDispatch()

    const handleDelete = (id: any) => {
        console.log(id);
        dispatch(remove(id))
    }
    
    const handleSeeMore = () => {
        setIsModalOpen(true);
        setSeeMore(true)
    }

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-4 gap-5 '>
                {
                    data?.map((item) => (
                        <div key={item.id} className='w-[250px] shadow-2xl rounded-[10px] bg-[#eee]'>
                            <div className=''>
                                <img src={item.img} alt="" />
                            </div>
                            <div className=' px-4 py-3'>
                                <h1 className='font-bold text-[18px]'>{item.FirstName} {item.LastName}</h1>
                                <h3 className='font-bold'>Age: {item.Age}</h3>
                                <h3 className='font-bold'>username: {item.username}</h3>
                                <h3 className='font-bold'>Phone: {item.Phone}</h3>
                            </div>
                            <div className=' flex justify-around py-2'>
                                <button className='text-white hover:bg-red-500 cursor-pointer outline-none px-4 py-2 rounded-[5px] bg-[#ccc]' onClick={() => handleDelete(item.id)}>Delete</button>
                                <button className='text-white hover:bg-green-500 cursor-pointer outline-none px-2 py-2 rounded-[5px] bg-[#ccc]' onClick={() => handleSeeMore()}>See more..</button>
                                {
                                    seemore && <ModalUser UserData={item} isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}/>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>


    )
}

export default memo(Student)
