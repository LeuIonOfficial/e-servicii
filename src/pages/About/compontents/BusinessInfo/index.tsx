import { Card, FloatButton, Space } from 'antd';
import { useContext, useState } from 'react';
import { UserContext } from '@store';
import AddBusiness from './components/AddBusiness';
import { PlusOutlined } from '@ant-design/icons';
import { BusinessType } from '../../../../models/UserType.ts';
const BusinessInfo = () => {
  const user = useContext(UserContext);
  const [drawerState, setDrawerState] = useState<
    'create' | 'update' | 'closed'
  >('closed');
  const [business, setBusiness] = useState<BusinessType | undefined>(undefined);

  const handleEdit = (index: number) => {
    setDrawerState('update');
    setBusiness(user?.businesses[index]);
  };

  return (
    <>
      <Space direction="horizontal" size={24} className="flex flex-wrap">
        {user?.businesses.map((business, index) => {
          console.log(business);
          return (
            <Card
              title={business.name}
              extra={
                <span
                  className="cursor-pointer"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </span>
              }
              key={index}
              className="w-[300px] h-[300px]"
            >
              <p>{business.description}</p>
              <p>{business.phone}</p>
            </Card>
          );
        })}
      </Space>
      <FloatButton
        className="right-20 bottom-20"
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => setDrawerState('create')}
      />
      <AddBusiness
        open={drawerState}
        setOpen={setDrawerState}
        business={business}
      />
    </>
  );
};

export default BusinessInfo;
