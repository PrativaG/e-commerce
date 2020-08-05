import React from 'react';

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections : [  
                {
                id: 1,
                title: 'Spoons',
                routeName: 'spoons',
                items: [
                  {
                    id: 1,
                    name: 'Spoon1',
                    imageUrl: 'https://weedmaps.com/learn/wp-content/uploads/2019/08/181016_Learn_Pipe_29.jpg',
                    price : 25
                  },
                  {
                    id: 2,
                    name: 'Spoon2',
                    imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
                    price: 18
                  },
                  {
                    id: 3,
                    name: 'Spoon3',
                    imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
                    price: 35
                  },
                  {
                    id: 4,
                    name: 'Grey Brim',
                    imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
                    price: 25
                  },
                  {
                    id: 5,
                    name: 'Green Beanie',
                    imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
                    price: 18
                  },
                  {
                    id: 6,
                    name: 'Palm Tree Cap',
                    imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
                    price: 14
                  },
                  {
                    id: 7,
                    name: 'Red Beanie',
                    imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
                    price: 18
                  },
                  {
                    id: 8,
                    name: 'Wolf Cap',
                    imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
                    price: 14
                  },
                  {
                    id: 9,
                    name: 'Blue Snapback',
                    imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
                    price: 16
                  }
                ]
              },
              {
                id: 2,
                title: 'Bongs',
                routeName: 'bongs',
                items: [
                  {
                    id: 1,
                    name: 'B1',
                    imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
                    price: 220
                  },
                  {
                    id: 2,
                    name: 'B2',
                    imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
                    price: 280
                  },
                  {
                    id: 3,
                    name: 'B3',
                    imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
                    price: 110
                  },
                  {
                    id: 4,
                    name: 'B4',
                    imageUrl: 'https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwjZpZHzt4TrAhULrJ4KHeL1DhUQjRx6BAgBEAQ&url=https%3A%2F%2Fwaterbedsnstuff.com%2F6-inch-mini-iridescent-beaker-bong%2F&psig=AOvVaw1f9lqwG26LZyamwJbdiSH-&ust=1596729727530704https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwjZpZHzt4TrAhULrJ4KHeL1DhUQjRx6BAgBEAQ&url=https%3A%2F%2Fwaterbedsnstuff.com%2F6-inch-mini-iridescent-beaker-bong%2F&psig=AOvVaw1f9lqwG26LZyamwJbdiSH-&ust=1596729727530704',
                    price: 160
                  },
                  {
                    id: 5,
                    name: 'B5',
                    imageUrl: 'https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwi6x_OfuITrAhUVpJ4KHT9MBg8QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.hemper.co%2Fcollections%2Fbongs&psig=AOvVaw0AjPds4KaFHeJrRznS2OJa&ust=1596729821476555',
                    price: 160
                  },
                  {
                    id: 6,
                    name: 'B6',
                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fweedrepublic.com%2Fproducts%2Fpaint-drip-beaker-bong&psig=AOvVaw3Wb0e7d20f9hWTxNtRexmc&ust=1596729810970000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDMpL-4hOsCFQAAAAAdAAAAABAS',
                    price: 160
                  },
                  {
                    id: 7,
                    name: 'B7',
                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fweedrepublic.com%2Fproducts%2Fpaint-drip-beaker-bong&psig=AOvVaw3Wb0e7d20f9hWTxNtRexmc&ust=1596729810970000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDMpL-4hOsCFQAAAAAdAAAAABAS',
                    price: 190
                  },
                  {
                    id: 8,
                    name: 'B8',
                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cannabox.com%2Fbong-size-guide-and-choosing-your-next-bong%2F&psig=AOvVaw3Wb0e7d20f9hWTxNtRexmc&ust=1596729810970000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDMpL-4hOsCFQAAAAAdAAAAABAY',
                    price: 200
                  }
                ]
              },
              {
                id: 3,
                title: 'Bubblers',
                routeName: 'bubblers',
                items: [
                  {
                    id: 1,
                    name: 'Bub1',
                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bongin.com%2Fglass-bubblers&psig=AOvVaw2oXF7zfcHOlpvb6NDM6eZY&ust=1596730143727000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMj48r-5hOsCFQAAAAAdAAAAABAD',
                    price: 125
                  },
                  {
                    id: 2,
                    name: 'Bub2',
                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fweedmaps.com%2Flearn%2Fdictionary%2Fbubbler%2F&psig=AOvVaw2oXF7zfcHOlpvb6NDM6eZY&ust=1596730143727000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMj48r-5hOsCFQAAAAAdAAAAABAJ',
                    price: 90
                  },
                  {
                    id: 3,
                    name: 'Bub3',
                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.leafly.com%2Fproducts%2Fdetails%2Fstash-lab-technologies-5-stinger-sherlock-bubbler&psig=AOvVaw2oXF7zfcHOlpvb6NDM6eZY&ust=1596730143727000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMj48r-5hOsCFQAAAAAdAAAAABAP',
                    price: 90
                  },
                  {
                    id: 4,
                    name: 'Bub4',
                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bongin.com%2Fglass-bubbler-pipe-136-blue&psig=AOvVaw2oXF7zfcHOlpvb6NDM6eZY&ust=1596730143727000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMj48r-5hOsCFQAAAAAdAAAAABAV',
                    price: 165
                  },
                  {
                    id: 5,
                    name: 'Bub5',
                    imageUrl: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Feugenedailynews.com%2F2018%2F09%2Fbest-10-glass-bubbler-pipes-for-sale%2F&psig=AOvVaw2oXF7zfcHOlpvb6NDM6eZY&ust=1596730143727000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMj48r-5hOsCFQAAAAAdAAAAABAb',
                    price: 185
                  }
                ]
              },
              {
                id: 4,
                title: 'Chillums',
                routeName: 'chillums',
                items: [
                  {
                    id: 1,
                    name: 'Chi1',
                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.smoke-nut.com%2Ftwisted-glass-chillum&psig=AOvVaw1bUNngLLDpF00yeeBeyLGJ&ust=1596730425471000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIi4scS6hOsCFQAAAAAdAAAAABAD',
                    price: 25
                  },
                  {
                    id: 2,
                    name: 'Chil2',
                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.smokedesire.com%2Findex.php%3Froute%3Dproduct%2Fproduct%26product_id%3D114&psig=AOvVaw1bUNngLLDpF00yeeBeyLGJ&ust=1596730425471000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIi4scS6hOsCFQAAAAAdAAAAABAJ',
                    price: 20
                  },
                  {
                    id: 3,
                    name: 'Chil3',
                    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsunflowerpipes.com%2Fproduct%2Fbaby-lizard-glass-chillum%2F&psig=AOvVaw1bUNngLLDpF00yeeBeyLGJ&ust=1596730425471000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIi4scS6hOsCFQAAAAAdAAAAABAP',
                    price: 80
                  },
                  {
                    id: 4,
                    name: 'Chi4',
                    imageUrl: 'https://cdn.shopify.com/s/files/1/0010/5237/7149/articles/chillums_1296x.jpg?v=1540473258',
                    price: 80
                  },
                  {
                    id: 5,
                    name: 'CHil5',
                    imageUrl: 'https://cdn11.bigcommerce.com/s-9w4zwzbhcc/images/stencil/2000x2000/products/1171/3358/Double_Glass_Fumed_Chillum_3.75in_2__91079.1555276403.JPG?c=2',
                    price: 45
                  },
                  {
                    id: 6,
                    name: 'Chil6',
                    imageUrl: 'https://www.420glasssearch.com/wp-content/uploads/thumbs_dir/chillin-toad-chillum-badass-glass_2_112_525x700-o6bzderp7ka6e8cv5jmqulo1cad3y6c3e0ckh8geua.jpg',
                    price: 135
                  },
                  {
                    id: 7,
                    name: 'Chi7',
                    imageUrl: 'https://cdn.shopify.com/s/files/1/0039/0574/9105/products/dichro-chillum-3-smoke-shop-supply-marijuana-packaging-148478_500x.jpg?v=1593789308',
                    price: 20
                  }
                ]
              },
              {
                id: 5,
                title: 'Dab Rigs',
                routeName: 'dabrigs',
                items: [
                  {
                    id: 1,
                    name: 'DR1',
                    imageUrl: 'https://image.dhgate.com/0x0s/f2-albu-g7-M01-DF-27-rBVaSVvBc4mANuYLAAG4niJnlqU597.jpg/glass-oil-rigs-with-od-25mm-quartz-banger.jpg',
                    price: 325
                  },
                  {
                    id: 2,
                    name: 'DR2',
                    imageUrl: 'https://www.puresativa.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/a/rasta-white-spiral-wigwag-angle.jpg',
                    price: 20
                  },
                  {
                    id: 3,
                    name: 'DR3',
                    imageUrl: 'https://www.grasscity.com/media/catalog/product/cache/efe85777930b284290f92120a6605dd3/x/5/x5-_03_.jpg',
                    price: 25
                  },
                  {
                    id: 4,
                    name: 'DR4',
                    imageUrl: 'https://cdn.shopify.com/s/files/1/2489/5144/products/mad-scientist-dab-rig-7in-7601461526607_2000x.jpg?v=1560872368',
                    price: 25
                  },
                  {
                    id: 5,
                    name: 'DR5',
                    imageUrl: 'https://cdn.shopify.com/s/files/1/2295/5965/products/showerhead-rig-simple_640x864.jpg?v=1579623022',
                    price: 40
                  },
                  {
                    id: 6,
                    name: 'DR6',
                    imageUrl: 'https://bigdaddysmoke.com/wp-content/uploads/2019/01/pulsar-cone-swirl-perc-dab-rig-quartz-banger-7-inch.jpg',
                    price: 25
                  }
                ]
              }
            ]
            
            
        }
    }

}