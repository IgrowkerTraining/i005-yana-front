import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: navigator.language || 'es',
  fallbackLng: 'es',
  debug: true,
  resources: {
    en: {
      translation: {
        login: {
          access: 'Access',
          email: 'Email',
          password: 'Password',
          remember: 'Remember me',
          forgot: 'Forgot my password',
          login: 'Log in',
          loginGoogle: 'Log in with Google',
          dontHaveAccount: "Don't have an account?",
          register: 'Register',
          failed: 'No active account found with the credentials provided.',
        },
        register: {
          method: {
            title: 'Create an account',
            subtitle: 'Your information is confidential. We will not share it with anyone.',
            useEmail: 'Register with email',
            useGoogle: 'Use Google to register',
            privacyText: 'By creating an account, you agree to our',
            privacyLink: 'Terms of service and privacy policy',
            haveAccount: 'Already have an account?',
            login: 'Log in',
          },
          email: {
            title: 'Create a profile with your email',
            subtitle:
              'Complete the data and receive a verification code by email to validate your account.',
            nameField: {
              label: 'Name',
              placeholder: 'Enter your name',
              error: {
                required: 'Name is required.',
                tooShort: 'Name must be at least 2 characters long.',
              },
            },
            lastNameField: {
              label: 'Last name',
              placeholder: 'Enter your last name',
              error: {
                required: 'Last name is required.',
                tooShort: 'Last name must be at least 2 characters long.',
              },
            },
            emailField: {
              label: 'Email',
              placeholder: 'Complete your email',
              error: {
                required: 'The email is required.',
                invalid: 'The email entered is not valid. Please try again.',
                taken: 'This email is already registered. Please try another or log in.',
              },
            },
          },
          password: {
            title: 'Create a secure password',
            subtitle: 'Please create a secure password for your account.',
            passwordField: {
              label: 'Password',
              placeholder: 'Create a password (minimum 8 characters)',
              error: {
                required: 'Please enter the password.',
                invalid: 'The password is missing the following requirements: {{requirements}}',
              },
            },
            requirements: {
              length: 'minimum 8 characters',
              number: 'at least one number',
              special: 'at least one special character',
              uppercase: 'at least one uppercase letter',
              lowercase: 'at least one lowercase letter',
            },
            passwordStrength: {
              text: 'Password strength',
              weak: 'Weak',
              medium: 'Medium',
              strong: 'Strong',
            },
            repeatPasswordField: {
              label: 'Repeat password',
              placeholder: 'Repeat your password',
              error: {
                required: 'Please repeat the password.',
                mismatch: 'The passwords do not match.',
              },
            },
          },
          done: {
            title: 'Done',
            subtitle: 'Thank you for being part of the You are not alone community!',
          },
          continue: 'Continue',
        },
        '/resources': {
          menu: 'Resources',
          title: 'Organizations',
        },
        '/profile': {
          menu: 'Profile',
          title: 'My Profile',
          account: 'Choose avatar',
          interactions: 'My interactions',
          configuration: 'Configuration',
          help: 'Emergency: I need help',
          logout: 'Log out',
          avatar: 'Choose avatar',
          notifications: 'Notifications',
          customization: 'Customize background',
          mode: 'Mode',
          light: 'Light',
          dark: 'Dark',
          appSounds: 'App sounds',
          fontsize: 'Font size',
          small: 'Small',
          large: 'Large',
          saveHistory: 'Save interaction history',
          hideStatus: 'Hide my status or activity',
          mute: 'Mute interactions',
          deleteAccount: 'Delete account',
        },
        '/contacts': {
          menu: 'Contacts',
          title: 'Institutions',
          contacts: {
            'Centro de Atención al Suicida (CAS)': {
              description:
                'Provides care and assistance to people in emotional crisis or at risk of suicide.',
              schedule: 'Hours: available 24/7, every day.',
              phone:
                'Phone: 135 (toll-free from landlines in CABA and Greater Buenos Aires) or (011) 5275-1135 (from anywhere in the country).',
            },
            'Programa Nacional de Prevención del Suicidio': {
              description:
                'Offers support, information, and counseling to people in crisis or those seeking to help someone in that situation.',
              schedule: 'Hours: available 24/7, every day.',
              phone: 'Phone: 141 (toll-free and confidential line).',
            },
            'Salud Mental': {
              description:
                'Provides assistance, support, and referrals for mental health emergencies.',
              schedule: 'Hours: available 24/7, every day.',
              phone: 'Phone: 0800 999 0091 (toll-free line).',
            },
            'Atención a Niñas, Niños y Adolescentes': {
              description:
                'Provides support, counseling, and guidance on the rights of children and adolescents.',
              schedule: 'Hours: available 24/7, every day.',
              phone: 'Phone: 102 (toll-free line).',
            },
            'Sistema de Atención Médica de Emergencias (SAME)': {
              description:
                'Provides emergency medical care in case of accidents or serious illnesses.',
              schedule: 'Hours: available 24/7, every day.',
              phone: 'Phone: 107 (toll-free line).',
            },
          },
        },
        '/FAQ': {
          menu: 'FAQ',
          title: 'Frequently Asked Questions',
          questions: [
            {
              question: 'What is You are not alone?',
              answer:
                'You are not alone is an app that seeks to build emotional connections between people who are in a situation of loneliness, anxiety, sadness, or disillusionment. It aims to transform isolation and promote empathy and solidarity in a community so that no one feels invisible.',
            },
            {
              question: 'What does it mean that my data is anonymous?',
              answer:
                'You are not alone treats your provided data confidentially and anonymously and will never share information that allows you to be identified with another user. The data helps improve your experience on the application and provides you with nearby contacts and resources, if you need them.<br />You can select emotions with confidence because the application is secure.',
            },
            {
              question: 'Can I use the app without registering?',
              answer:
                'To use the application, it is necessary that you create an account, so you have to register with your email.',
            },
            {
              question: 'What do I do if I forget my password?',
              answer:
                'If you forget your password, you can reset it by clicking on "Forgot my password" when you log in and you will receive an email with the steps to recover your account.',
            },
            {
              question: 'Does the app have resources or contacts that can help me?',
              answer:
                'Yes, you can use the resources and contacts provided in the app to help you feel better.',
            },
            {
              question: 'Can I chat with another person who is in a similar situation to mine?',
              answer:
                'No, you cannot chat with another user, but you can send and receive predefined support messages to accompany each other, promote connections, and promote empathy.',
            },
            {
              question:
                'If I find an incorrect resource (for example, an incorrect address or phone number), can I report it?',
              answer:
                'Yes, you can report an incorrect resource by contacting the You are not alone team by email writing to info@yana.com or through social media via a private message.',
            },
            {
              question: 'Does the app have any cost?',
              answer:
                'You are not alone is a free application. You can create your account and interact with other people without cost.',
            },
            {
              question: 'Can I delete my account at any time?',
              answer:
                'Yes, you can delete your account. Only you have to do is click on the "Delete account" option. But… we want to accompany you!',
            },
          ],
        },
        '/settings': {
          menu: 'Settings',
          title: 'Settings',
        },
        '/logout': {
          menu: 'Exit',
          title: 'Exit',
        },
        '/profile/account': {
          title: 'Edit Profile',
        },
        '/profile/configuration': {
          title: 'Configuration',
        },
        '/profile/interactions': {
          title: 'My interactions',
        },
        '/profile/others': {
          title: 'Others',
        },
        footer: {
          title: 'You are not alone',
          products: 'Products',
          support: 'Support',
          medicalAssistance: 'Medical Assistance',
          resources: 'Resources',
          legal: 'Legal',
          terms: 'Terms',
          conditions: 'Conditions',
          privacy: 'Privacy',
          contact: 'Contact',
          copyright: '©2025 You are not alone - All rights reserved',
          address:
            'YANA S. de R.L. de C.V. Renato Peña 490 Sur, Centro. Monterrey, Nuevo León, México. C.P. 6400',
        },
        header: {
          welcome: 'Hello, {{name}}',
        },
        common: {
          cancel: 'Cancel',
          confirm: 'Confirm',
          delete: 'Delete',
          deleteAccount: 'Delete Account',
          deleteAccountMessage: 'Do you confirm that you want to delete your account?',
          passwordPlaceholder: 'Enter your password',
          start: 'Start',
        },
        onboarding: {
          step1: {
            title: 'Start your journey',
            subtitle: 'Discover everything you can do on this platform.',
          },
          step2: {
            title: 'Share your emotions in a safe space',
            subtitle: 'Choose an emotion every day, express it and connect with other people.',
          },
          step3: {
            title: 'Participate in a shared emotions map',
            subtitle:
              'Discover how other people feel in an interactive interface. Send and receive support through predefined messages. Explore links with empathy.',
          },
          step4: {
            title: 'Get help whenever you need it',
            subtitle:
              'Access contacts and resources to feel better. Remember that you are part of a community that supports you.',
          },
        },
        emotions: {
          sadness: 'Sadness',
          distress: 'Distress',
          loneliness: 'Loneliness',
          reluctance: 'Reluctance',
          tranquility: 'Tranquility',
          questionEmotion: 'What are you feeling today?',
        },
        map: {
          errorLoadingEmotions: 'Error loading emotions',
          loadingEmotions: 'Loading emotions...',
        },
        resetPassword: {
          subtitle: "Enter your email address and we'll send you a link to reset your password.",
          email: 'Email',
          emailPlaceholder: 'Enter your email',
          sendResetLink: 'Recover password',
          newPassword: 'New Password',
          newPasswordPlaceholder: 'Enter your new password',
          repeatNewPassword: 'Repeat new password',
          repeatNewPasswordPlaceholder: 'Confirm your new password',
          changePassword: 'Change password',
        },
        helpModal: {
          title: 'We are here to listen',
          subtitle: 'We have noticed you are feeling unwell.<br />Talking to someone can help.',
          button: 'Call',
        },
        markerModal: {
          success: 'Message sent!',
          error: 'Error sending message',
          templateMessages: {
            '1': 'Cheer up!',
            '2': "I'm here for you",
            '3': "I'm with you, I share what you feel",
          },
        },
        resources: {
          access: 'Access',
          listen: 'Listen',
          binaurapp: {
            title: 'Focus your mind, relax your body.',
            subtitle: 'Enter in a different sound environment.',
            button: 'Go to the web',
          },
          meditation: {
            title: 'Meditations',
            items: [
              {
                title: 'Peaceful mind.',
                subtitle: 'A safe space.',
                description: 'Meditation for beginners.',
                author: 'Gabriela Málaga',
                views: '3k views',
                date: '1 year ago',
                duration: '15 min',
              },
              {
                title: 'Emotional well-being.',
                subtitle: 'Time for introspection.',
                description: 'Guided meditation to relax.',
                author: 'Luz Zapata',
                views: '4k views',
                date: '3 months ago',
                duration: '20 min',
              },
              {
                title: 'Here and now.',
                subtitle: 'In search of tranquility.',
                description: 'Meditate and connect.',
                author: 'Alma Soler',
                views: '11k views',
                date: '11 months ago',
                duration: '35 min',
              },
              {
                title: 'Solar rune.',
                subtitle: 'A sonic journey to your interior.',
                description: 'Meditate and know yourself.',
                author: 'Runa Solar',
                views: '1k views',
                date: '2 years ago',
                duration: '25 min',
              },
            ],
          },
          podcast: {
            recommended: '(recommended)',
            items: [
              {
                title: 'How to cultivate solidarity?',
                description: 'Lic. Ana Gabriela Mena and team',
              },
              {
                title: 'Learning in community',
                description: 'Personal Growth Center',
              },
              {
                title: 'Life is worth living',
                description: 'Collective Development School',
              },
              {
                title: 'Always forward',
                description: 'Lorena Capobianco Ludueña',
              },
              {
                title: 'You can count on me',
                description: 'Zafiro Medical Center',
              },
              {
                title: 'Connected bridges',
                description: 'Support Network NGO',
              },
              {
                title: 'Stories of everyday life',
                description: 'Civil Association Well-being and Empathy',
              },
            ],
          },
          playlist: {
            items: [
              {
                title: 'Joined hands. Songs to connect with your surroundings.',
                description:
                  'Indian music oriented to improve your connection with what surrounds you.',
              },
              {
                title: 'Sensations. Sounds that calm.',
                description: 'An exquisite musical selection produced with Tibetan bowls.',
              },
              {
                title: 'Sounds that help you sleep.',
                description: 'A relaxing auditory experience to fall asleep.',
              },
              {
                title: 'ENYA Nature as a source of inspiration.',
                description:
                  'The music of the Irish artist guides towards a journey of deep connection with the environment.',
              },
            ],
          },
        },
        notifications: {
          title: 'Notifications',
          newMessage: 'You have a new message',
          today: 'Today',
          yesterday: 'Yesterday',
          thisWeek: 'This week',
          thisMonth: 'This month',
          older: 'Older',
        },
      },
    },
    es: {
      translation: {
        // login
        login: {
          access: 'Acceder',
          email: 'Email',
          password: 'Contraseña',
          remember: 'Recordarme',
          forgot: 'Olvidé la contraseña',
          login: 'Ingresar',
          loginGoogle: 'Iniciar sesión con Google',
          dontHaveAccount: '¿No tienes una cuenta?',
          register: 'Regístrate',
          failed: 'No se encontró una cuenta activa con las credenciales proporcionadas.',
        },

        // register stages
        register: {
          method: {
            title: 'Crear una cuenta',
            subtitle: 'Tu información es confidencial. No vamos a compartir tus datos.',
            useEmail: 'Registrarse con correo electrónico',
            useGoogle: 'Crear una cuenta con Google',
            privacyText: 'Al crear una cuenta, aceptas los',
            privacyLink: 'Términos de uso y políticas de privacidad.',
            haveAccount: '¿Tienes una cuenta?',
            login: 'Ingresar',
          },
          email: {
            title: 'Crea un perfil con tu email',
            subtitle:
              'Completa los datos y recibe un código por correo electrónico para validar tu cuenta.',
            nameField: {
              label: 'Nombre',
              placeholder: 'Ingresa tu nombre',
              error: {
                required: 'El nombre es requerido.',
                tooShort: 'El nombre debe tener al menos 2 caracteres.',
              },
            },
            lastNameField: {
              label: 'Apellido(s)',
              placeholder: 'Ingresa tu apellido(s)',
              error: {
                required: 'El apellido es requerido.',
                tooShort: 'El apellido debe tener al menos 2 caracteres.',
              },
            },
            emailField: {
              label: 'Correo electrónico',
              placeholder: 'Completa tu email',
              error: {
                required: 'El correo es requerido.',
                invalid: 'El email ingresado no es válido. Por favor, íntentalo de nuevo.',
                taken:
                  'Este correo electrónico ya está registrado. Por favor, intenta con otro o inicia sesión.',
              },
            },
          },
          password: {
            title: 'Crear contraseña',
            subtitle: 'Por favor, crea una contraseña segura para tu cuenta.',
            passwordField: {
              label: 'Contraseña',
              placeholder: 'Crea tu contraseña (mínimo 8 caracteres, número y carácter especial)',
              error: {
                required: 'Por favor, introduce la contraseña.',
                invalid: 'La contraseña no cumple con los siguientes requisitos: {{requirements}}',
              },
            },
            requirements: {
              length: 'mínimo 8 caracteres',
              number: 'al menos un número',
              special: 'al menos un carácter especial',
              uppercase: 'al menos una letra mayúscula',
              lowercase: 'al menos una letra minúscula',
            },
            passwordStrength: {
              text: 'Seguridad de la contraseña',
              weak: 'Débil',
              medium: 'Media',
              strong: 'Fuerte',
            },
            repeatPasswordField: {
              label: 'Repetir contraseña',
              placeholder: 'Repite tu contraseña',
              error: {
                required: 'Por favor, repite la contraseña.',
                mismatch: 'Las contraseñas no coinciden.',
              },
            },
          },
          done: {
            title: '¡Listo!',
            subtitle: '¡Gracias por ser parte de la comunidad You are not alone!',
          },
          continue: 'Continuar',
        },
        '/': {
          menu: 'Home',
        },
        '/resources': {
          menu: 'Recursos',
          title: 'Organizaciones',
        },
        '/profile': {
          menu: 'Perfil',
          title: 'Mi Perfil',
          account: 'Elegir avatar',
          interactions: 'Mis interacciones',
          configuration: 'Configuración',
          help: 'Emergencia: necesito ayuda',
          logout: 'Salir',
          avatar: 'Elegir avatar',
          notifications: 'Notificaciones',
          customization: 'Personalizar fondo',
          mode: 'Modo',
          light: 'Claro',
          dark: 'Oscuro',
          appSounds: 'Sonidos de la app',
          fontsize: 'Tamaño fuente',
          small: 'Pequeño',
          large: 'Grande',
          saveHistory: 'Guardar historia de interacciones',
          hideStatus: 'Ocultar mi estado o actividad',
          mute: 'Silenciar interacciones',
          deleteAccount: 'Eliminar cuenta',
        },
        '/contacts': {
          menu: 'Contactos',
          title: 'Instituciones',
          contacts: {
            'Centro de Atención al Suicida (CAS)': {
              description:
                'Brinda atención y asistencia a personas en crisis emocional o en riesgo de suicidio.',
              schedule: 'Horario: disponible las 24 horas, todos los días.',
              phone:
                'Teléfonos: 135 (línea gratuita desde teléfonos fijos en CABA y Gran Buenos Aires) o (011) 5275-1135 (desde cualquier parte del país).',
            },
            'Programa Nacional de Prevención del Suicidio': {
              description:
                'Ofrece contención, información y asesoramiento a personas en crisis o a quienes buscan ayudar a alguien en esa situación.',
              schedule: 'Horario: disponible las 24 horas, todos los días.',
              phone: 'Teléfonos: 141 (línea gratuita y confidencial).',
            },
            'Salud Mental': {
              description:
                'Ofrece asistencia, acompañamiento y derivación en casos de urgencias en salud mental.',
              schedule: 'Horario: disponible las 24 horas, todos los días.',
              phone: 'Teléfonos: 0800 999 0091 (línea gratuita).',
            },
            'Atención a Niñas, Niños y Adolescentes': {
              description:
                'Brinda contención, asesoramiento y orientación sobre los derechos de niñas, niños y adolescentes.',
              schedule: 'Horario: disponible las 24 horas, todos los días.',
              phone: 'Teléfonos: 102 (línea gratuita).',
            },
            'Sistema de Atención Médica de Emergencia (SAME)': {
              description:
                'Ofrece atención médica de emergencia en caso de accidentes o enfermedades graves.',
              schedule: 'Horario: disponible las 24 horas, todos los días.',
              phone: 'Teléfonos: 107 (línea gratuita).',
            },
          },
        },
        '/FAQ': {
          menu: 'FAQ',
          title: 'Preguntas frecuentes',
          questions: [
            {
              question: '¿Qué es You are not alone?',
              answer:
                'You are not alone es una aplicación que busca construir conexiones emocionales significativas entre personas que están en una situación de soledad, angustia, tristeza o desgano. Se propone transformar el aislamiento e impulsar la empatía y solidaridad en comunidad para que ninguna persona se sienta invisible.',
            },
            {
              question: '¿Qué significa que mis datos son anónimos?',
              answer:
                'You are not alone trata de forma confidencial y anónima los datos proporcionados y nunca va a compartir información que permita identificarte con otra persona usuaria. Los datos ayudan a mejorar tu experiencia en la aplicación y a brindarte contactos y recursos cercanos, en caso de que los necesites.<br />Puedes seleccionar emociones con tranquilidad porque la aplicación es segura.',
            },
            {
              question: '¿Puedo usar la aplicación sin registrarme?',
              answer:
                'Para utilizar la aplicación, es necesario que crees una cuenta, por lo tanto, tienes que registrarte con tu correo electrónico.',
            },
            {
              question: 'Si olvido mi contraseña, ¿puedo restablecerla?',
              answer:
                'Si necesitas restablecer tu contraseña, al momento de iniciar sesión puedes hacer clic en "Olvidé mi contraseña" y recibirás un correo electrónico con los pasos para recuperar tu cuenta.',
            },
            {
              question: '¿En la app hay recursos o contactos que me puedan ayudar?',
              answer:
                'Si necesitas restablecer tu contraseña, al momento de iniciar sesión puedes hacer clic en "Olvidé mi contraseña" y recibirás un correo electrónico con los pasos para recuperar tu cuenta.',
            },
            {
              question:
                '¿Puedo chatear con otra persona que está en una situación similar a la mía?',
              answer:
                'No puedes chatear con otra persona usuaria, pero sí puedes enviar y recibir mensajes predeterminados de apoyo para acompañarse, fomentar conexiones y promover empatía.',
            },
            {
              question:
                'Si encuentro un recurso incorrecto (por ejemplo, una dirección o un número de teléfono erróneo), ¿puedo reportarlo?',
              answer:
                'Sí, te puedes comunicar con el equipo de You are not alone por correo electrónico escribiendo a info@yana.com o por redes sociales a través de un mensaje privado.',
            },
            {
              question: '¿La aplicación tiene algún costo?',
              answer:
                'You are not alone es una aplicación gratuita. Puedes crear tu cuenta e interactuar con otras personas sin costo.',
            },
            {
              question: '¿Puedo eliminar mi cuenta en cualquier momento?',
              answer:
                'Sí, puedes borrar tu cuenta. Solo debes hacer clic en la opción "Eliminar cuenta". Pero… ¡queremos acompañarte!',
            },
          ],
        },
        '/settings': {
          menu: 'Configuración',
          title: 'Configuración',
        },
        '/logout': {
          menu: 'Cerrar sesión',
          title: 'Cerrar sesión',
        },
        '/profile/account': {
          title: 'Editar Perfil',
        },
        '/profile/configuration': {
          title: 'Configuración',
        },
        '/profile/interactions': {
          title: 'Mis interacciones',
        },
        '/profile/others': {
          title: 'Otros',
        },
        footer: {
          title: 'You are not alone',
          products: 'Productos',
          support: 'Soporte',
          medicalAssistance: 'Asistencia médica',
          resources: 'Recursos',
          legal: 'Legal',
          terms: 'Términos',
          conditions: 'Condiciones',
          privacy: 'Privacidad',
          contact: 'Contacto',
          copyright: '©2025 You are not alone - Todos los derechos reservados',
          address:
            'YANA S. de R.L. de C.V. Renato Peña 490 Sur, Centro. Monterrey, Nuevo León, México. C.P. 6400',
        },
        header: {
          welcome: 'Hola, {{name}}',
        },
        common: {
          cancel: 'Cancelar',
          confirm: 'Confirmar',
          delete: 'Eliminar',
          deleteAccount: 'Eliminar cuenta',
          deleteAccountMessage: '¿Confirmas que deseas eliminar tu cuenta?',
          passwordPlaceholder: 'Ingresa tu contraseña',
          start: 'Comenzar',
        },
        onboarding: {
          step1: {
            title: 'Comienza tu recorrido',
            subtitle: 'Descubre todo lo que puedes hacer en esta plataforma.',
          },
          step2: {
            title: 'Comparte tus emociones en un espacio seguro',
            subtitle: 'Elige un estado de ánimo cada día, exprésalo y conecta con otras personas.',
          },
          step3: {
            title: 'Participa en un mapa de emociones compartidas',
            subtitle:
              'Conoce cómo se sienten otras personas en una interfaz interactiva. Envía y recibe apoyo a través de mensajes predeterminados. Explora vínculos con empatía.',
          },
          step4: {
            title: 'Obtén ayuda cada vez que la necesites',
            subtitle:
              'Accede a contactos y recursos para sentirte mejor. Recuerda que eres parte de una comunidad que te acompaña.',
          },
        },
        emotions: {
          sadness: 'Tristeza',
          distress: 'Angustia',
          loneliness: 'Soledad',
          reluctance: 'Desgano',
          tranquility: 'Tranquilidad',
          questionEmotion: '¿Qué sientes hoy?',
        },
        map: {
          errorLoadingEmotions: 'Error al cargar las emociones',
          loadingEmotions: 'Cargando emociones...',
        },
        resetPassword: {
          subtitle:
            'Ingresa tu correo electrónico y recibirás un enlace para restablecer tu contraseña.',
          email: 'Correo electrónico',
          emailPlaceholder: 'Ingresa tu email',
          sendResetLink: 'Recuperar contraseña',
          newPassword: 'Nueva contraseña',
          newPasswordPlaceholder: 'Ingresa tu nueva contraseña',
          repeatNewPassword: 'Repetir nueva contraseña',
          repeatNewPasswordPlaceholder: 'Confirma tu nueva contraseña',
          changePassword: 'Cambiar contraseña',
        },
        helpModal: {
          title: 'Estamos aquí para escucharte',
          subtitle: 'Hemos notado que no te sientes bien.<br />Hablar con alguien puede ayudarte.',
          button: 'Llamar',
        },
        markerModal: {
          success: '¡Mensaje enviado!',
          error: 'Error al enviar el mensaje',
          templateMessages: {
            '1': '¡Ánimo!',
            '2': 'Cuentas con todo mi apoyo',
            '3': 'Estoy contigo, comparto lo que sientes',
          },
        },
        resources: {
          access: 'Acceder',
          listen: 'Escuchar',
          binaurapp: {
            title: 'Enfoca tu mente, relaja tu cuerpo.',
            subtitle: 'Ingresa en un ambiente sonoro distinto.',
            button: 'Ir a la web',
          },
          meditation: {
            title: 'Meditaciones',
            items: [
              {
                title: 'Mente tranquila.',
                subtitle: 'Un espacio seguro.',
                description: 'Meditación para principiantes.',
                author: 'Gabriela Málaga',
                views: '3k de vistas',
                date: 'hace 1 año',
                duration: '15 min',
              },
              {
                title: 'Bienestar emocional.',
                subtitle: 'Tiempo de introspección.',
                description: 'Meditación guiada para relajar.',
                author: 'Luz Zapata',
                views: '4k de vistas',
                date: 'hace 3 meses',
                duration: '20 min',
              },
              {
                title: 'Aquí y ahora. En busca de la tranquilidad.',
                subtitle: 'En busca de la tranquilidad.',
                description: 'Meditación y conexión.',
                author: 'Alma Soler',
                views: '11k de vistas',
                date: 'hace 11 meses',
                duration: '35 min',
              },
              {
                title: 'Runa solar.',
                subtitle: 'Un viaje sonoro a tu interior.',
                description: 'Meditación y conexión.',
                author: 'Runa Solar',
                views: '1k de vistas',
                date: 'hace 2 años',
                duration: '25 min',
              },
            ],
          },
          podcast: {
            recommended: '(recomendados)',
            items: [
              {
                title: '¿Cómo cultivar la solidaridad?',
                description: 'Lic. Ana Gabriela Mena y equipo',
              },
              {
                title: 'Aprender en comunidad',
                description: 'Centro de Crecimiento Personal',
              },
              {
                title: 'Vivir vale la pena',
                description: 'Escuela de Desarrollo Colectivo',
              },
              {
                title: 'Siempre adelante',
                description: 'Lorena Capobianco Ludueña',
              },
              {
                title: 'Cuentas conmigo',
                description: 'Centro Médico Zafiro',
              },
              {
                title: 'Puentes conectados',
                description: 'ONG Red de apoyo',
              },
              {
                title: 'Historias de la vida cotidiana',
                description: 'Asociación Civil Bienestar y Empatía',
              },
            ],
          },
          playlist: {
            items: [
              {
                title: 'Manos enlazadas. Canciones para conectar con tu entorno.',
                description: 'Música india orientada a mejorar tu vinculación con lo que te rodea.',
              },
              {
                title: 'Sensaciones. Sonidos que calman.',
                description: 'Una exquisita selección musical producida con cuencos tibetanos.',
              },
              {
                title: 'Sonidos que te ayudan a dormir.',
                description: 'Una experiencia auditiva relajante para conciliar el sueño.',
              },
              {
                title: 'ENYA La naturaleza como fuente de inspiración.',
                description:
                  'La música de la artista irlandesa guía hacia un viaje de conexión profunda con el ambiente.',
              },
            ],
          },
        },
        notifications: {
          newMessage: 'Tienes un mensaje nuevo',
          today: 'Hoy',
          yesterday: 'Ayer',
          thisWeek: 'Esta semana',
          thisMonth: 'Este mes',
          thisYear: 'Este año',
        },
      },
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
