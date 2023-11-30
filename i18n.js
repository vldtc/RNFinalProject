// i18n.js
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageStorage from './helpers/LanguageStorage';

const resources = {
  en: {
    translation: {
      //Forms
      req: '* Required',
      invEmail: 'Invalid email',
      lettersOnly: 'Only letters allowed.',
      invPass: 'Invalid password',
      passMatch: 'Passwords do not match',
      passContainsNameOrDob: 'Do not include name, or date of birth!',

      //Colors Modal
      colorInfo: 'Color infomation',
      colorInfoBody:
        'This will determine the color of your markers on the map. \n You can change this color later in your user profile section.\n Simply choose a preset color, or use the last option and pick any colour you prefer!',
      close: 'Close',

      //Password Modal
      passInfo: 'Password requirements',
      passInfoBody:
        "Passwords must contain at least \n\nONE capital letter \nONE lowercase letter \nONE digit \nONE special character \n\n Make sure to select a password that doesn't contain your name and date of birth.",

      //Auth Screen
      login: 'Login',
      register: 'Register',
      email: 'Email',
      pass: 'Password',
      registerHelp: "If you don't have an account, register here!",
      modalOpen: 'Open',
      modalClose: 'Close',
      fName: 'First name',
      lName: 'Last name',
      age: 'Date of birth',
      gender: 'Gender',
      Male: 'Male',
      Female: 'Female',
      userColor: 'Marker color',
      userLocation: 'City',
      passConf: 'Confirm password',
      //Main Stack Screens
      home: 'Home',
      dash: 'Dashboard',
      aboutMe: 'About me',
      people: 'People',

      //Locale Languages
      changeLanguage: 'Change language',
      en: 'English  🇺🇸',
      ro: 'Romanian  🇷🇴',
      es: 'Spanish  🇪🇸',
      it: 'Italian  🇮🇹',
      fr: 'French  🇫🇷',
      de: 'German  🇩🇪',
      ru: 'Russian  🇷🇺',
      hu: 'Hungarian  🇭🇺',
      cancel: 'Cancel',
      signOut: 'Sign out',
    },
  },
  ro: {
    translation: {
      //Forms
      req: '* Necesar',
      invEmail: 'Email invalid',
      lettersOnly: 'Doar litere permise.',
      invPass: 'Parolă invalidă',
      passMatch: 'Parolele nu se potrivesc',
      passContainsNameOrDob: 'Nu includeți numele sau data de naștere!',

      //Colors Modal
      colorInfo: 'Informații despre culoare',
      colorInfoBody:
        'Acest lucru va determina culoarea marcatorilor de pe hartă. \n Puteți schimba această culoare ulterior în secțiunea profilului dvs. de utilizator.\n Alegeți pur și simplu o culoare presetată sau utilizați ultima opțiune și alegeți orice culoare preferați!',
      close: 'Închide',

      //Password Modal
      passInfo: 'Cerințe parolă',
      passInfoBody:
        'Parolele trebuie să conțină cel puțin \n\n1 literă mare \n1 literă mică \n1 numar \n1 caracter special \n\n Asigurați-vă că selectați o parolă care nu conține numele și data de naștere.',

      //Auth Screen
      login: 'Autentificare',
      register: 'Înregistrare',
      email: 'Email',
      pass: 'Parolă',
      registerHelp: 'Dacă nu aveți un cont, înregistrați-vă aici!',
      modalOpen: 'Deschide',
      modalClose: 'Închide',
      fName: 'Prenume',
      lName: 'Nume',
      age: 'Data nașterii',
      gender: 'Gen',
      Male: 'Bărbat',
      Female: 'Femeie',
      userColor: 'Culoare marcator',
      userLocation: 'Oras',
      passConf: 'Confirmă parola',
      //Main Stack
      home: 'Acasă',
      dash: 'Panou de control',
      aboutMe: 'Despre mine',
      people: 'Oameni',

      //Locale Languages
      changeLanguage: 'Schimbă limba',
      en: 'Engleză  🇺🇸',
      ro: 'Română  🇷🇴',
      es: 'Spaniolă  🇪🇸',
      it: 'Italiană  🇮🇹',
      fr: 'Franceză  🇫🇷',
      de: 'Germană  🇩🇪',
      ru: 'Rusă  🇷🇺',
      hu: 'Maghiară  🇭🇺',
      cancel: 'Anulează',
      signOut: 'Deconectare',
    },
  },
  es: {
    translation: {
      //Forms
      req: '* Requerido',
      invEmail: 'Correo electrónico inválido',
      lettersOnly: 'Solo se permiten letras.',
      invPass: 'Contraseña inválida',
      passMatch: 'Las contraseñas no coinciden',
      passContainsNameOrDob: 'No incluir nombre ni fecha de nacimiento',

      //Colors Modal
      colorInfo: 'Información de color',
      colorInfoBody:
        'Esto determinará el color de sus marcadores en el mapa. \n Puede cambiar este color más tarde en la sección de su perfil de usuario.\n ¡Simplemente elija un color preestablecido o use la última opción y elija el color que prefiera!',
      close: 'Cerrar',

      //Password Modal
      passInfo: 'Requisitos de contraseña',
      passInfoBody:
        'Las contraseñas deben contener al menos \n\nUNA letra mayúscula \nUNA letra minúscula \nUN número \nUN carácter especial \n\n Asegúrese de seleccionar una contraseña que no contenga su nombre y fecha de nacimiento.',

      //Auth Screen
      login: 'Iniciar sesión',
      register: 'Registrarse',
      email: 'Correo electrónico',
      pass: 'Contraseña',
      registerHelp: 'Si no tiene una cuenta, regístrese aquí.',
      modalOpen: 'Abrir',
      modalClose: 'Cerrar',
      fName: 'Nombre',
      lName: 'Apellido',
      age: 'Fecha de nacimiento',
      gender: 'Género',
      Male: 'Masculino',
      Female: 'Femenino',
      userColor: 'Color del marcador',
      userLocation: 'Ubicación',
      passConf: 'Confirmar contraseña',
      //Main Stack Screens
      home: 'Inicio',
      dash: 'Tablero',
      aboutMe: 'Acerca de mí',
      people: 'Personas',

      //Locale Languages
      changeLanguage: 'Cambiar idioma',
      en: 'Inglés  🇺🇸',
      ro: 'Rumano  🇷🇴',
      es: 'Español  🇪🇸',
      it: 'Italiano  🇮🇹',
      fr: 'Francés  🇫🇷',
      de: 'Alemán  🇩🇪',
      ru: 'Ruso  🇷🇺',
      hu: 'Húngaro  🇭🇺',
      cancel: 'Cancelar',
      signOut: 'Cerrar sesión',
    },
  },
  it: {
    translation: {
      //Forms
      req: '* Obbligatorio',
      invEmail: 'Email non valida',
      lettersOnly: 'Sono permesse solo lettere.',
      invPass: 'Password non valida',
      passMatch: 'Le password non corrispondono',
      passContainsNameOrDob: 'Non includere nome o data di nascita!',

      //Colors Modal
      colorInfo: 'Informazioni colore',
      colorInfoBody:
        "Questo determinerà il colore dei tuoi marcatori sulla mappa. \n Puoi cambiare questo colore in seguito nella sezione del tuo profilo utente.\n Scegli semplicemente un colore preimpostato o usa l'ultima opzione e scegli il colore che preferisci!",
      close: 'Chiudi',

      //Password Modal
      passInfo: 'Requisiti della password',
      passInfoBody:
        'Le password devono contenere almeno \n\nUNA lettera maiuscola \nUNA lettera minuscola \nUN numero \nUN carattere speciale \n\n Assicurati di selezionare una password che non contenga il tuo nome e la tua data di nascita.',

      //Auth Screen
      login: 'Accedi',
      register: 'Registrati',
      email: 'Email',
      pass: 'Password',
      registerHelp: 'Se non hai un account, registrati qui!',
      modalOpen: 'Apri',
      modalClose: 'Chiudi',
      fName: 'Nome',
      lName: 'Cognome',
      age: 'Data di nascita',
      gender: 'Genere',
      Male: 'Maschile',
      Female: 'Femminile',
      userColor: 'Colore del marcatore',
      userLocation: 'Posizione',
      passConf: 'Conferma password',
      //Main Stack Screens
      home: 'Casa',
      dash: 'Pannello di controllo',
      aboutMe: 'Su di me',
      people: 'Persone',

      //Locale Languages
      changeLanguage: 'Cambia lingua',
      en: 'Inglese  🇺🇸',
      ro: 'Rumeno  🇷🇴',
      es: 'Spagnolo  🇪🇸',
      it: 'Italiano  🇮🇹',
      fr: 'Francese  🇫🇷',
      de: 'Tedesco  🇩🇪',
      ru: 'Russo  🇷🇺',
      hu: 'Ungherese  🇭🇺',
      cancel: 'Annulla',
      signOut: 'Esci',
    },
  },
  fr: {
    translation: {
      //Forms
      req: '* Obligatoire',
      invEmail: 'E-mail invalide',
      lettersOnly: 'Seules les lettres sont autorisées.',
      invPass: 'Mot de passe invalide',
      passMatch: 'Les mots de passe ne correspondent pas',
      passContainsNameOrDob: 'Ne pas inclure le nom ou la date de naissance !',

      //Colors Modal
      colorInfo: 'Informations sur la couleur',
      colorInfoBody:
        'Cela déterminera la couleur de vos marqueurs sur la carte. \n Vous pouvez changer cette couleur plus tard dans la section de votre profil utilisateur.\n Choisissez simplement une couleur prédéfinie ou utilisez la dernière option et choisissez la couleur que vous préférez!',
      close: 'Fermer',

      //Password Modal
      passInfo: 'Exigences du mot de passe',
      passInfoBody:
        'Les mots de passe doivent contenir au moins \n\nUNE lettre majuscule \nUNE lettre minuscule \nUN chiffre \nUN caractère spécial \n\n Assurez-vous de choisir un mot de passe qui ne contient pas votre nom et votre date de naissance.',

      //Auth Screen
      login: 'Se connecter',
      register: "S'inscrire",
      email: 'E-mail',
      pass: 'Mot de passe',
      registerHelp: "Si vous n'avez pas de compte, inscrivez-vous ici!",
      modalOpen: 'Ouvrir',
      modalClose: 'Fermer',
      fName: 'Prénom',
      lName: 'Nom de famille',
      age: 'Date de naissance',
      gender: 'Genre',
      Male: 'Homme',
      Female: 'Femme',
      userColor: 'Couleur du marqueur',
      userLocation: 'Emplacement',
      passConf: 'Confirmer le mot de passe',
      //Main Stack Screens
      home: 'Accueil',
      dash: 'Tableau de bord',
      aboutMe: 'À propos de moi',
      people: 'Personnes',

      //Locale Languages
      changeLanguage: 'Changer de langue',
      en: 'Anglais  🇺🇸',
      ro: 'Roumain  🇷🇴',
      es: 'Espagnol  🇪🇸',
      it: 'Italien  🇮🇹',
      fr: 'Français  🇫🇷',
      de: 'Allemand  🇩🇪',
      ru: 'Russe  🇷🇺',
      hu: 'Hongrois  🇭🇺',
      cancel: 'Annuler',
      signOut: 'Déconnexion',
    },
  },
  de: {
    translation: {
      //Forms
      req: '* Erforderlich',
      invEmail: 'Ungültige E-Mail',
      lettersOnly: 'Nur Buchstaben erlaubt.',
      invPass: 'Ungültiges Passwort',
      passMatch: 'Die Passwörter stimmen nicht überein',
      passContainsNameOrDob: 'Nicht den Namen oder das Geburtsdatum verwenden!',

      //Colors Modal
      colorInfo: 'Farbinformationen',
      colorInfoBody:
        'Dies bestimmt die Farbe Ihrer Marker auf der Karte. \n Sie können diese Farbe später in Ihrem Benutzerprofil ändern.\n Wählen Sie einfach eine voreingestellte Farbe oder verwenden Sie die letzte Option und wählen Sie die Farbe, die Sie bevorzugen!',
      close: 'Schließen',

      //Password Modal
      passInfo: 'Passwortanforderungen',
      passInfoBody:
        'Passwörter müssen mindestens enthalten \n\nEINEN Großbuchstaben \nEINEN Kleinbuchstaben \nEINE Ziffer \nEIN Sonderzeichen \n\n Stellen Sie sicher, dass Sie ein Passwort wählen, das Ihren Namen und Ihr Geburtsdatum nicht enthält.',

      //Auth Screen
      login: 'Anmelden',
      register: 'Registrieren',
      email: 'E-Mail',
      pass: 'Passwort',
      registerHelp:
        'Wenn Sie noch kein Konto haben, registrieren Sie sich hier!',
      modalOpen: 'Öffnen',
      modalClose: 'Schließen',
      fName: 'Vorname',
      lName: 'Nachname',
      age: 'Geburtsdatum',
      gender: 'Geschlecht',
      Male: 'Männlich',
      Female: 'Weiblich',
      userColor: 'Markerfarbe',
      userLocation: 'Ort',
      passConf: 'Passwort bestätigen',
      //Main Stack Screens
      home: 'Startseite',
      dash: 'Armaturenbrett',
      aboutMe: 'Über mich',
      people: 'Menschen',

      //Locale languages
      changeLanguage: 'Sprache ändern',
      en: 'Englisch  🇺🇸',
      ro: 'Rumänisch  🇷🇴',
      es: 'Spanisch  🇪🇸',
      it: 'Italienisch  🇮🇹',
      fr: 'Französisch  🇫🇷',
      de: 'Deutsch  🇩🇪',
      ru: 'Russisch  🇷🇺',
      hu: 'Ungarisch  🇭🇺',
      cancel: 'Abbrechen',
      signOut: 'Abmelden',
    },
  },
  ru: {
    translation: {
      //Forms
      req: '* Обязательно',
      invEmail: 'Неверный адрес электронной почты',
      lettersOnly: 'Разрешены только буквы.',
      invPass: 'Неверный пароль',
      passMatch: 'Пароли не совпадают',
      passContainsNameOrDob: 'Не включать имя или дату рождения!',

      //Colors Modal
      colorInfo: 'Информация о цвете',
      colorInfoBody:
        'Это определит цвет ваших маркеров на карте. \n Вы можете изменить этот цвет позже в разделе профиля пользователя.\n Просто выберите предустановленный цвет или используйте последний вариант и выберите любой цвет, который вам нравится!',
      close: 'Закрыть',

      //Password Modal
      passInfo: 'Требования к паролю',
      passInfoBody:
        'Пароли должны содержать как минимум \n\nОДНУ заглавную букву \nОДНУ строчную букву \nОДНУ цифру \nОДИН специальный символ \n\n Убедитесь, что вы выбираете пароль, который не содержит ваше имя и дату рождения.',

      //Auth Screen
      login: 'Вход',
      register: 'Регистрация',
      email: 'Электронная почта',
      pass: 'Пароль',
      registerHelp: 'Если у вас нет аккаунта, зарегистрируйтесь здесь!',
      modalOpen: 'Открыть',
      modalClose: 'Закрыть',
      fName: 'Имя',
      lName: 'Фамилия',
      age: 'Дата рождения',
      gender: 'Пол',
      Male: 'Мужской',
      Female: 'Женский',
      userColor: 'Цвет маркера',
      userLocation: 'Местоположение',
      passConf: 'Подтверждение пароля',
      //Main Stack Screen
      home: 'Главная',
      dash: 'Панель управления',
      aboutMe: 'Обо мне',
      people: 'Люди ',

      //Locale Languages
      changeLanguage: 'Изменить язык',
      en: 'Английский  🇺🇸',
      ro: 'Румынский  🇷🇴',
      es: 'Испанский  🇪🇸',
      it: 'Итальянский  🇮🇹',
      fr: 'Французский  🇫🇷',
      de: 'Немецкий  🇩🇪',
      ru: 'Русский  🇷🇺',
      hu: 'Венгерский  🇭🇺',
      cancel: 'Отмена',
      signOut: 'Выйти',
    },
  },
  hu: {
    translation: {
      //Forms
      req: '* Kötelező',
      invEmail: 'Érvénytelen e-mail cím',
      lettersOnly: 'Csak betűk engedélyezettek.',
      invPass: 'Érvénytelen jelszó',
      passMatch: 'A jelszavak nem egyeznek',
      passContainsNameOrDob: 'Ne tartalmazza a nevet vagy a születési dátumot!',

      //Colors Modal
      colorInfo: 'Szín információ',
      colorInfoBody:
        'Ez meghatározza a térképen látható jelzőjelek színét. \n Ezt a színt később módosíthatja a felhasználói profil részen.\n Egyszerűen válasszon egy előre beállított színt, vagy használja az utolsó lehetőséget, és válassza ki a tetszőleges színét!',
      close: 'Bezár',

      //Password Modal
      passInfo: 'Jelszó követelmények',
      passInfoBody:
        'A jelszónak tartalmaznia kell legalább \n\nEGY nagybetűt \nEGY kisbetűt \nEGY számot \nEGY speciális karaktert \n\n Győződjön meg róla, hogy olyan jelszót választ, amely nem tartalmazza a nevét és születési dátumát.',

      //Auth Screen
      login: 'Bejelentkezés',
      register: 'Regisztráció',
      email: 'E-mail',
      pass: 'Jelszó',
      registerHelp: 'Ha még nincs fiókja, regisztráljon itt!',
      modalOpen: 'Megnyitás',
      modalClose: 'Bezárás',
      fName: 'Keresztnév',
      lName: 'Vezetéknév',
      age: 'Születési dátum',
      gender: 'Nem',
      Male: 'Férfi',
      Female: 'Nő',
      userColor: 'Jelző szín',
      userLocation: 'Hely',
      passConf: 'Jelszó megerősítése',
      //Main Stack Screens
      home: 'Kezdőlap',
      dash: 'Irányítópult',
      aboutMe: 'Rólam',
      people: 'Emberek',

      //Locale Languages
      changeLanguage: 'Nyelv váltása',
      en: 'Angol  🇺🇸',
      ro: 'Román  🇷🇴',
      es: 'Spanyol  🇪🇸',
      it: 'Olasz  🇮🇹',
      fr: 'Francia  🇫🇷',
      de: 'Német  🇩🇪',
      ru: 'Orosz  🇷🇺',
      hu: 'Magyar  🇭🇺',
      cancel: 'Mégse',
      signOut: 'Kijelentkezés',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
