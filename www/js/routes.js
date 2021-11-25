
var routes = [
  {
    path: '/',
    url: './pages/home.html',
    on: {
      pageAfterIn: function (e, page) {
      console.log('ok');
      var router = this;
      var app = router.app;
        app.request.get('https://www.themealdb.com/api/json/v1/1/random.php', function (data) {
          data = JSON.parse(data);
          console.log(data)
          console.log(data.meals[0].strMeal);
          $('.origine').append('<div>' + data.meals[0].strArea + '</div>')
          $('.titre').append('<div>' + data.meals[0].strMeal + '</div>')
          $('.recette').append('<div>' + data.meals[0].strInstructions + '</div>')
          $('.categorie').append('<div>' + data.meals[0].strCategory + '</div>')
          $('.image').append('<img style="height:auto; width:100%;" src="'+ data.meals[0].strMealThumb +'">')


          $('.Ingredient1').append('<div>' + data.meals[0].strIngredient1 + '</div>')
          $('.Ingredient2').append('<div>' + data.meals[0].strIngredient2 + '</div>')
          $('.Ingredient3').append('<div>' + data.meals[0].strIngredient3 + '</div>')
          $('.Ingredient4').append('<div>' + data.meals[0].strIngredient4 + '</div>')
          $('.Ingredient5').append('<div>' + data.meals[0].strIngredient5 + '</div>')
          $('.Ingredient6').append('<div>' + data.meals[0].strIngredient6 + '</div>')
          $('.Ingredient7').append('<div>' + data.meals[0].strIngredient7 + '</div>')
          $('.Ingredient8').append('<div>' + data.meals[0].strIngredient8 + '</div>')
          $('.Ingredient9').append('<div>' + data.meals[0].strIngredient9 + '</div>')
          $('.Ingredient10').append('<div>' + data.meals[0].strIngredient10 + '</div>')
          $('.Ingredient11').append('<div>' + data.meals[0].strIngredient11 + '</div>')
          $('.Ingredient12').append('<div>' + data.meals[0].strIngredient12 + '</div>')
          $('.Ingredient13').append('<div>' + data.meals[0].strIngredient13 + '</div>')
          $('.Ingredient14').append('<div>' + data.meals[0].strIngredient14 + '</div>')
          $('.Ingredient15').append('<div>' + data.meals[0].strIngredient15 + '</div>')
          $('.Ingredient16').append('<div>' + data.meals[0].strIngredient16 + '</div>')
          $('.Ingredient17').append('<div>' + data.meals[0].strIngredient17 + '</div>')
          $('.Ingredient18').append('<div>' + data.meals[0].strIngredient18 + '</div>')
          $('.Ingredient19').append('<div>' + data.meals[0].strIngredient19 + '</div>')
          $('.Ingredient20').append('<div>' + data.meals[0].strIngredient20 + '</div>')

          $('.Mesure1').append('<div>' + data.meals[0].strMeasure1 + '</div>')
          $('.Mesure2').append('<div>' + data.meals[0].strMeasure2 + '</div>')
          $('.Mesure3').append('<div>' + data.meals[0].strMeasure3 + '</div>')
          $('.Mesure4').append('<div>' + data.meals[0].strMeasure4 + '</div>')
          $('.Mesure5').append('<div>' + data.meals[0].strMeasure5 + '</div>')
          $('.Mesure6').append('<div>' + data.meals[0].strMeasure6 + '</div>')
          $('.Mesure7').append('<div>' + data.meals[0].strMeasure7 + '</div>')
          $('.Mesure8').append('<div>' + data.meals[0].strMeasure8 + '</div>')
          $('.Mesure9').append('<div>' + data.meals[0].strMeasure9 + '</div>')
          $('.Mesure10').append('<div>' + data.meals[0].strMeasure10 + '</div>')
          $('.Mesure11').append('<div>' + data.meals[0].strMeasure11 + '</div>')
          $('.Mesure12').append('<div>' + data.meals[0].strMeasure12 + '</div>')
          $('.Mesure13').append('<div>' + data.meals[0].strMeasure13 + '</div>')
          $('.Mesure14').append('<div>' + data.meals[0].strMeasure14 + '</div>')
          $('.Mesure15').append('<div>' + data.meals[0].strMeasure15 + '</div>')
          $('.Mesure16').append('<div>' + data.meals[0].strMeasure16 + '</div>')
          $('.Mesure17').append('<div>' + data.meals[0].strMeasure17 + '</div>')
          $('.Mesure18').append('<div>' + data.meals[0].strMeasure18 + '</div>')
          $('.Mesure19').append('<div>' + data.meals[0].strMeasure19 + '</div>')
          $('.Mesure20').append('<div>' + data.meals[0].strMeasure20 + '</div>')


          categories = data.categories;
        });
      }
    }
  },
  {
    path: '/about/',
    url: './pages/about.html',
    on: {
      pageAfterIn: function (e, page) {
        console.log('Ok');
      }
    },
  },
  {
    path: '/form/',
    url: './pages/form.html',
    on: {
      pageAfterIn: function (e, page) {
        console.log('Ok');
      }
    },
  },
  {
    path: '/catalog/',
    componentUrl: './pages/catalog.html/',
  },
  {
    path: '/catalog-category/:index',
    componentUrl: './pages/catalog-category.html/',
  },
  {
    path: '/product/:id/',
    componentUrl: './pages/product.html',
  },
  {
    path: '/settings/',
    url: './pages/settings.html',
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    componentUrl: './pages/dynamic-route.html',
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/request-and-load.html',
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
