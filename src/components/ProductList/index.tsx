import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Product, { IProductData } from '../Product';

interface IProductListProps {
  data: IProductData[];
}

const ProductList: React.FC<IProductListProps> = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Product data={item} />}
      showsVerticalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.content}
    />
  );
};
const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  content: {
    paddingBottom: 100,
  },
});

export default ProductList;
