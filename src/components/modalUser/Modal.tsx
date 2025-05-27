import { FC } from "react"
import { IStudent } from "../../types"
import { Modal } from "antd"

interface Props {
    UserData: IStudent | undefined
    isModalOpen: any
    handleOk: any
    handleCancel: any
}

const ModalUser: FC<Props> = ({ UserData, isModalOpen, handleOk, handleCancel }) => {
    console.log(UserData);

    return (
        <div>
            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <h1 className='font-bold text-[18px]'>{UserData?.FirstName} {UserData?.LastName}</h1>
                <h3 className='font-bold text-[18px]'>Age: {UserData?.Age}</h3>
                <h3 className='font-bold text-[18px]'>username: {UserData?.username}</h3>
                <h3 className='font-bold text-[18px]'>Phone: {UserData?.Phone}</h3>
                <h3 className='font-bold text-[18px]'>Password: {UserData?.Password}</h3>
            </Modal>
        </div>
    )
}

export default ModalUser
