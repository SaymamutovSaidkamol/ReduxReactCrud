import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input, InputNumber } from 'antd';
import { PatternFormat } from 'react-number-format';
import { useDispatch } from 'react-redux';
import { create } from '../../redux/features/student.slice';

export type FieldType = {
    id?: number;
    FirstName?: string;
    LastName?: string;
    Age: number;
    username: string;
    Password: string;
    Phone?: number;
    img: string,
};


const Create: React.FC = () => {
    const [form] = Form.useForm<FieldType>();
    const dispatch = useDispatch()
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        // console.log('Success:', values);
        values = { ...values, img: "https://www.shutterstock.com/image-vector/admin-icon-isolated-on-white-260nw-2598582391.jpg", id: new Date().getTime() }
        dispatch(create(values))
        form.resetFields();
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <div className='container mx-auto mt-20'>
                <div className='w-[350px] flex justify-center items-center ml-[35%] rounded-[5px] bg-[#eee] p-10'>
                    <Form
                        form={form}
                        name="basic"
                        initialValues={{ remember: false }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        layout='vertical'
                        className='w-[100%] '

                    >
                        <Form.Item<FieldType>
                            label="FirstName"
                            name="FirstName"
                            rules={[{ required: true, message: 'Please input your FirstName!' }]}
                        >
                            <Input placeholder='firtsName...' />
                        </Form.Item>


                        <Form.Item<FieldType>
                            label="LastName"
                            name="LastName"
                            rules={[{ required: true, message: 'Please input your LastName!' }]}
                        >
                            <Input placeholder='lastName...' />
                        </Form.Item>


                        <Form.Item label="Age" name="Age" rules={[{ required: true, message: 'Please input your Age!' }]}>
                            <InputNumber placeholder='Age...' />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input placeholder='Username...' />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Password"
                            name="Password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password placeholder='Password...' />
                        </Form.Item>


                        <Form.Item
                            label="Phone"
                            name="Phone"
                            rules={[{ required: true, message: 'Please input your Phone!' }]}
                            className="w-[100%]"
                        >
                            <PatternFormat
                                format="+998 (##) ###-##-##"
                                mask="_"
                                value="998901234567"
                                allowEmptyFormatting
                                className="w-full bg-white rounded-[5px] outline-none px-2 py-1"
                            />
                        </Form.Item>

                        <Form.Item label={null}>
                            <Button type="primary" htmlType="submit" className='w-[100%]'>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Create;