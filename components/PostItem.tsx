import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/constants';

type Post = {
  sender: string;
  body: string;
  handle: string;
  createdAt: Date;
};

type Props = {
  post: Post;
};

export default function PostItem({ post }: Props) {
  const { sender, body, handle, createdAt } = post;
  return (
    <View style={styles.card}>
      <Text>
        {sender}: {handle}
      </Text>
      <Text style={styles.center}>{body}</Text>
      <Text style={styles.right}>{createdAt.toLocaleDateString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  right: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.cardBackground,
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 30,
    marginBottom: 30,
    borderColor: colors.cardShadow,
    borderWidth: 0.5,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    textAlign: 'left',
  },
});
