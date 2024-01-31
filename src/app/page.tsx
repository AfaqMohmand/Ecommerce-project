'use client'
import styles from "./page.module.css";
import {Card} from 'antd'

const {Meta} = Card

export default function Home() {
  return (
    <main className={styles.main}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </main>
  );
}
