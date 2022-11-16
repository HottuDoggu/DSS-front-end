import React, { Fragment, useEffect } from 'react'
import styles from '../../styles/css/admin-components/manage-test.module.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AdminLayout from '../../admin-components/adminLayout';
import TestManagement from '../../admin-components/assessment-test';
import { useRouter } from 'next/router';
export default function ManageTest() {
const router = useRouter();
  useEffect(()=>{
    const aid = sessionStorage.getItem("__AID");
    if(!aid){
      router.push('/login');
    }
  },[])

  return (
    <div className={styles.container} >
      <div className={styles.header} >
          <AdminLayout/>
      </div>
        <div className={styles.content} >
        <Tabs>
    <TabList>
      <Tab>ASSESSMENT</Tab>
    </TabList>

    <TabPanel>
      <TestManagement/>
    </TabPanel>
    {/*<TabPanel>
      <ServiceManage/>
    </TabPanel>
    <TabPanel>
      <BusinessManage/>
    </TabPanel>*/}
  </Tabs>
        </div>
    </div>
  )
}
