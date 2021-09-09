import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyCtIHGAqbD_hFdL99ya7Lygiq0_7XWq5FM",
    authDomain: "reactapp-1c781.firebaseapp.com",
    databaseURL: "https://reactapp-1c781.firebaseio.com",
    projectId: "reactapp-1c781",
    storageBucket: "reactapp-1c781.appspot.com",
    messagingSenderId: "828203496682",
    appId: "1:828203496682:web:f5aa77cdc5b48a946e5393",
    measurementId: "G-0D4JGJBRDL"
  };
  
  

class Firebase {
    constructor(){
        app.initializeApp(firebaseConfig);

        this.app = app.database(); 
        //quando em outro componente ou classe eu chamar app, estarei na verdade referenciando app.database()
        this.storage = app.storage();
    }

    login(email, password) {
        return app.auth().signInWithEmailAndPassword(email, password);
    }

    logout() {
        return app.auth().signOut();
    }

    async register(nome, email, password){
       await app.auth().createUserWithEmailAndPassword(email, password);

       const uid = app.auth().currentUser.uid;

       return app.database().ref('usuarios').child(uid).set({
           nome: nome
       })
    }

    isInitilized() {
        return new Promise(resolve =>{
            app.auth().onAuthStateChanged(resolve);
        })
    }

    getCurrent() {
        //utilizando o && eu digo que se a condição anterior for atendida eu executo o que vier em seguida
        return app.auth().currentUser && app.auth().currentUser.email;
    }

    getCurrentUid(){
        return app.auth().currentUser && app.auth().currentUser.uid;
    }

    async getUserName(callback) {
        if(!app.auth().currentUser){
            return null;
        }

        const uid = app.auth().currentUser.uid;

        //De acordo com o uid eu vou ao banco do firebase e busco o nome dele 
        await app.database().ref('usuarios').child(uid)
            .once('value').then(callback);
            //Esse método retorna um callback se houver sucesso
    }
}

//AQUI ESTOU MEIO QUE EXPORTANDO UMA NOVA INSTANCIA DESSA CLASSE PARA PODER UTILIZAR SEUS MÉTODOS POSTERIORMENTE
export default new Firebase();

