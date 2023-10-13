import { Button, FloatButton } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '@store';
import AddBusiness from './components/AddBusiness';
import { PlusOutlined } from '@ant-design/icons';
import { BusinessType } from '@models/UserType.ts';
import { useParams } from 'react-router-dom';
const BusinessInfo = () => {
  const user = useContext(UserContext);
  const [drawerState, setDrawerState] = useState<
    'create' | 'update' | 'closed'
  >('closed');
  const [business, setBusiness] = useState<BusinessType | undefined>(undefined);
  const { id } = useParams();
  const handleEdit = () => {
    setDrawerState('update');
    setBusiness(business);
  };

  useEffect(() => {
    !!id && setBusiness(user?.businesses.find((el) => el.id === +id));
  }, [id, user?.businesses]);

  return (
    <>
      <div>
        <div className="flex w-full h-full flex-col ">
          <div>{business?.name}</div>
          <div>{business?.description}</div>
          <div>{business?.phone}</div>
          <div>
            <Button onClick={handleEdit}>Edit</Button>
          </div>
        </div>
      </div>
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
