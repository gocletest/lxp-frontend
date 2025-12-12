import { Card, List } from "antd";

const items = [
  "사용자 ‘홍길동’ 로그인",
  "신규 과정 ‘AI 기초반’ 등록",
  "관리자 비밀번호 변경",
  "접속 통계 업데이트",
];

const RecentActivity = () => {
  return (
    <Card title="최근 활동 로그" style={{ borderRadius: 12, marginTop: 20 }}>
      <List
        dataSource={items}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </Card>
  );
};

export default RecentActivity;
