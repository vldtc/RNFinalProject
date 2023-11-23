// i18n.js
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
  en: {
    translation: {
      login: 'Login',
      register: 'Register',
      email: 'Email',
      pass: 'Password',
      signOut: 'Sign out',
      registerHelp: "If you don't have an account, register here!",
      modalOpen: 'Open',
      modalClose: 'Close',
      fName: 'First name',
      lName: 'Last name',
      age: 'Age',
      gender: 'Gender',
      userColor: 'User color',
      userLocation: 'User location',
      passConf: 'Confirm password',
    },
  },
  ro: {
    translation: {
      login: 'Conectare',
      register: 'Inregistrare',
      email: 'Email',
      pass: 'Parola',
      signOut: 'Deconectare',
      registerHelp: 'Daca nu ai un cont, inregistreaza-te aici!',
      modalOpen: 'Deschide',
      modalClose: 'Inchide',
      fName: 'Prenume',
      lName: 'Nume de familie',
      age: 'Varsta',
      gender: 'Sex',
      userColor: 'Culoarea utilizatorului',
      userLocation: 'Locatia utilizatorului',
      passConf: 'Confirma parola',
    },
  },
  es: {
    translation: {
      login: 'Iniciar sesión',
      register: 'Registrarse',
      email: 'Correo electrónico',
      pass: 'Contraseña',
      signOut: 'Cerrar sesión',
      registerHelp: 'Si no tienes una cuenta, regístrate aquí',
      modalOpen: 'Abrir',
      modalClose: 'Cerrar',
      fName: 'Nombre',
      lName: 'Apellido',
      age: 'Edad',
      gender: 'Género',
      userColor: 'Color de usuario',
      userLocation: 'Ubicación de usuario',
      passConf: 'Confirmar contraseña',
    },
  },
  it: {
    translation: {
      login: 'Accesso',
      register: 'Registrati',
      email: 'Email',
      pass: 'Password',
      signOut: 'Disconnetti',
      registerHelp: 'Se non hai un account, registrati qui!',
      modalOpen: 'Apri',
      modalClose: 'Chiudi',
      fName: 'Nome',
      lName: 'Cognome',
      age: 'Età',
      gender: 'Genere',
      userColor: 'Colore utente',
      userLocation: 'Posizione utente',
      passConf: 'Conferma password',
    },
  },
  fr: {
    translation: {
      login: 'Connexion',
      register: 'Inscription',
      email: 'Email',
      pass: 'Mot de passe',
      signOut: 'Déconnexion',
      registerHelp: "Si vous n'avez pas de compte, inscrivez-vous ici",
      modalOpen: 'Ouvrir',
      modalClose: 'Fermer',
      fName: 'Prénom',
      lName: 'Nom de famille',
      age: 'Âge',
      gender: 'Genre',
      userColor: "Couleur de l'utilisateur",
      userLocation: "Emplacement de l'utilisateur",
      passConf: 'Confirmer le mot de passe',
    },
  },
  de: {
    translation: {
      login: 'Anmeldung',
      register: 'Registrieren',
      email: 'E-Mail',
      pass: 'Passwort',
      signOut: 'Abmelden',
      registerHelp: 'Wenn Sie kein Konto haben, registrieren Sie sich hier',
      modalOpen: 'Öffnen',
      modalClose: 'Schließen',
      fName: 'Vorname',
      lName: 'Nachname',
      age: 'Alter',
      gender: 'Geschlecht',
      userColor: 'Benutzerfarbe',
      userLocation: 'Benutzerstandort',
      passConf: 'Passwort bestätigen',
    },
  },
  pt: {
    translation: {
      login: 'Entrar',
      register: 'Registrar',
      email: 'E-mail',
      pass: 'Senha',
      signOut: 'Sair',
      registerHelp: 'Se você não tem uma conta, registre-se aqui',
      modalOpen: 'Abrir',
      modalClose: 'Fechar',
      fName: 'Primeiro nome',
      lName: 'Sobrenome',
      age: 'Idade',
      gender: 'Gênero',
      userColor: 'Cor do usuário',
      userLocation: 'Localização do usuário',
      passConf: 'Confirmar senha',
    },
  },
  ru: {
    translation: {
      login: 'Вход',
      register: 'Регистрация',
      email: 'Электронная почта',
      pass: 'Пароль',
      signOut: 'Выйти',
      registerHelp: 'Если у вас нет учетной записи, зарегистрируйтесь здесь',
      modalOpen: 'Открыть',
      modalClose: 'Закрыть',
      fName: 'Имя',
      lName: 'Фамилия',
      age: 'Возраст',
      gender: 'Пол',
      userColor: 'Цвет пользователя',
      userLocation: 'Местоположение пользователя',
      passConf: 'Подтвердите пароль',
    },
  },
  hu: {
    translation: {
      login: 'Bejelentkezés',
      register: 'Regisztráció',
      email: 'Email',
      pass: 'Jelszó',
      signOut: 'Kijelentkezés',
      registerHelp: 'Ha nincs fiókja, regisztráljon itt!',
      modalOpen: 'Megnyitás',
      modalClose: 'Bezárás',
      fName: 'Keresztnév',
      lName: 'Vezetéknév',
      age: 'Kor',
      gender: 'Nem',
      userColor: 'Felhasználói szín',
      userLocation: 'Felhasználó helye',
      passConf: 'Jelszó megerősítése',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'de', // Default language is set to Spanish ('es')
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
