import React from 'react';

import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';


const App = () => {

  return (


      <>

      <ScrollView>

        <View style = {{ flexDirection: 'row' }}>

          <Image
            style = {styles.banner}
            source = { require('./assets/img/bg.jpg') }

          />

        </View>


          <View style = {styles.contenedor}>
            <Text style = {styles.titulo}>Qué hacer en Paris</Text>
          
            <ScrollView
            horizontal
            >
              <View>

              <Image
              style = {styles.ciudad}
              source = { require('./assets/img/actividad1.jpg') }
              />

              </View>

              <View>

              <Image
              style = {styles.ciudad}
              source = { require('./assets/img/actividad2.jpg') }
              />

              </View>

              <View>

              <Image
              style = {styles.ciudad}
              source = { require('./assets/img/actividad3.jpg') }
              />

              </View>

              <View>

              <Image
              style = {styles.ciudad}
              source = { require('./assets/img/actividad4.jpg') }
              />

              </View>

              <View>

              <Image
              style = {styles.ciudad}
              source = { require('./assets/img/actividad5.jpg') }
              />

              </View>

            </ScrollView>

            <Text style = {styles.titulo}>Los mejores Alojamientos</Text>

              <View>
                <View>
                <Image
                  style = {styles.mejores}
                  source = { require('./assets/img/mejores1.jpg') }
                />
                </View>
              </View>

              <View>
                <View>
                <Image
                  style = {styles.mejores}
                  source = { require('./assets/img/mejores2.jpg') }
                />
                </View>
              </View>

              <View>
                <View>
                <Image
                  style = {styles.mejores}
                  source = { require('./assets/img/mejores3.jpg') }
                />
                </View>
              </View>

              <Text style = {styles.titulo}>Hospedajes en LA</Text>
                <View style = {styles.listado}>
                  <View style = {styles.listadoItem}>
                  <Image
                    style = {styles.mejores}
                    source = { require('./assets/img/hospedaje1.jpg') }
                  />
                  </View>

                  <View style = {styles.listadoItem}>
                  <Image
                    style = {styles.mejores}
                    source = { require('./assets/img/hospedaje2.jpg') }
                  />
                  </View>

                  <View style = {styles.listadoItem}>
                  <Image
                    style = {styles.mejores}
                    source = { require('./assets/img/hospedaje3.jpg') }
                  />
                  </View>

                  <View style = {styles.listadoItem}>
                  <Image
                    style = {styles.mejores}
                    source = { require('./assets/img/hospedaje4.jpg') }
                  />
                  </View>

                </View>
          </View>

      
        </ScrollView>
      </>



    // <>
    //   {/* <View style = {styles.contenedor}>

    //       <View style = {styles.caja1}></View>
    //       <View style = {styles.caja2}></View>
    //       <View style = {styles.caja3}></View>
    //       <View style = {styles.caja4}></View>

    //   </View> */}
    // </>
  );
};

const styles = StyleSheet.create({
banner: {
  height: 250,
  flex: 1

},
titulo: {
  fontWeight: 'bold',
  fontSize: 24,
  marginVertical: 20
},
contenedor: {
  marginHorizontal: 10
},
ciudad: {
  width: 250,
  height: 300,
  marginRight: 10,

},
mejores: {
  width: '100%',
  height: 200,
  marginVertical: 5,
},
listado: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
},
listadoItem: {
  flexBasis: '49%'
}










//   contenedor: {
//     backgroundColor: 'cornflowerblue',
//     flex: 1,
//     flexDirection: 'column',   //El valor por defecto es column, o sea vertical
//     justifyContent: 'center',
//     // alignItems: 'center'
//   },
//   caja1: {
//     padding: 20,
//     backgroundColor: 'navy',
//     //flex: 1                                   //Cada un mide lo mismo, se comparten el espacio
//   },
//   caja2: {
//     padding: 20,
//     backgroundColor: 'yellow',
//     //flex: 1                                   //Cada un mide lo mismo, se comparten el espacio
//   },
//   caja3: {
//     padding: 20,
//     backgroundColor: 'green',
//     //flex: 1                                   //Cada un mide lo mismo, se comparten el espacio
//   },
//   caja4: {
//     padding: 20,
//     backgroundColor: 'teal',
//     //flex: 1                                   //Cada un mide lo mismo, se comparten el espacio
//   } 

});

export default App;
