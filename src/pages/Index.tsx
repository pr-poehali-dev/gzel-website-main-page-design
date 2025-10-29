import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'history', label: 'История Гжели', icon: 'BookOpen' },
    { id: 'gallery', label: 'Галерея изделий', icon: 'Image' },
    { id: 'masterclass', label: 'Мастер-классы', icon: 'Palette' },
    { id: 'videos', label: 'Видео уроки', icon: 'Video' },
    { id: 'shop', label: 'Магазин', icon: 'ShoppingBag' },
  ];

  const products = [
    { id: 1, name: 'Чайник "Традиция"', price: '3 500 ₽', image: 'https://cdn.poehali.dev/files/58b81fa9-0ca8-47b1-88df-a041aefc06e9.jpg' },
    { id: 2, name: 'Ваза "Цветочная"', price: '4 200 ₽', image: 'https://cdn.poehali.dev/files/7ae6cfc7-ba62-469c-8cc0-a22dad5787f5.jpg' },
    { id: 3, name: 'Набор чашек', price: '2 800 ₽', image: 'https://cdn.poehali.dev/files/58b81fa9-0ca8-47b1-88df-a041aefc06e9.jpg' },
    { id: 4, name: 'Блюдо декоративное', price: '5 100 ₽', image: 'https://cdn.poehali.dev/files/7ae6cfc7-ba62-469c-8cc0-a22dad5787f5.jpg' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-primary/10 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white text-xl font-heading">Г</span>
              </div>
              <h1 className="text-3xl font-heading font-bold text-primary">Гжель</h1>
            </div>
            
            <div className="hidden md:flex gap-1">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => scrollToSection(item.id)}
                  className="font-body"
                >
                  <Icon name={item.icon as any} className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              ))}
            </div>

            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 px-4 gzhel-ornament">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-heading font-bold text-primary mb-6">
              Искусство Гжели
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-body mb-8 leading-relaxed">
              Традиционный русский народный промысел с более чем 670-летней историей. 
              Знаменитая бело-синяя роспись керамики, созданная мастерами Подмосковья.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('gallery')} className="font-body">
                <Icon name="Image" className="mr-2 h-5 w-5" />
                Галерея изделий
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('shop')} className="font-body">
                <Icon name="ShoppingBag" className="mr-2 h-5 w-5" />
                Купить изделия
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="history" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Icon name="BookOpen" className="h-8 w-8 text-primary" />
              <h2 className="text-5xl font-heading font-bold text-primary">История Гжели</h2>
            </div>
            <div className="space-y-6 font-body text-lg leading-relaxed">
              <p className="text-foreground">
                Гжель — это район, включающий 27 деревень, объединённых в "Гжельский куст". 
                Первое упоминание о Гжели встречается в завещании Ивана Калиты от 1339 года.
              </p>
              <p className="text-foreground">
                Издавна местность славилась высококачественными глинами. В XIV веке здесь 
                начинается производство керамики. Особого расцвета Гжель достигла в XIX веке, 
                когда была создана знаменитая сине-белая роспись.
              </p>
              <p className="text-foreground">
                Сегодня Гжель — это всемирно известный бренд русской керамики, символ 
                национальной культуры и мастерства. Изделия создаются вручную и расписываются 
                мастерами по уникальной технологии.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <Icon name="Image" className="h-8 w-8 text-primary" />
            <h2 className="text-5xl font-heading font-bold text-primary">Галерея изделий</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden bg-secondary/20">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-2">{product.name}</h3>
                  <p className="font-body text-lg font-bold text-foreground">{product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="masterclass" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <Icon name="Palette" className="h-8 w-8 text-primary" />
            <h2 className="text-5xl font-heading font-bold text-primary">Мастер-классы</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Paintbrush" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-primary mb-3">Роспись для начинающих</h3>
                <p className="font-body text-muted-foreground mb-4">
                  Освойте базовые элементы гжельской росписи
                </p>
                <Button variant="outline" className="font-body">Записаться</Button>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-primary mb-3">Семейный мастер-класс</h3>
                <p className="font-body text-muted-foreground mb-4">
                  Творческий досуг для всей семьи
                </p>
                <Button variant="outline" className="font-body">Записаться</Button>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Trophy" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-primary mb-3">Продвинутый курс</h3>
                <p className="font-body text-muted-foreground mb-4">
                  Сложные техники и авторский стиль
                </p>
                <Button variant="outline" className="font-body">Записаться</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="videos" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <Icon name="Video" className="h-8 w-8 text-primary" />
            <h2 className="text-5xl font-heading font-bold text-primary">Видео уроки</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="p-0">
                <div className="aspect-video bg-secondary/20 flex items-center justify-center">
                  <Icon name="Play" className="h-16 w-16 text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-semibold text-primary mb-2">
                    Основы гжельской росписи
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Знакомство с техникой мазка и базовыми элементами
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-0">
                <div className="aspect-video bg-secondary/20 flex items-center justify-center">
                  <Icon name="Play" className="h-16 w-16 text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-semibold text-primary mb-2">
                    Создание цветочного узора
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Пошаговая роспись традиционных гжельских цветов
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="shop" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <Icon name="ShoppingBag" className="h-8 w-8 text-primary" />
            <h2 className="text-5xl font-heading font-bold text-primary">Магазин продукции</h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden border-primary/20 hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden bg-secondary/20">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-heading text-xl font-semibold text-primary mb-2">{product.name}</h3>
                    <p className="font-body text-lg font-bold text-foreground mb-3">{product.price}</p>
                    <Button className="w-full font-body">
                      <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                      В корзину
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button size="lg" className="font-body">
                Смотреть весь каталог
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-4">Гжель</h3>
              <p className="font-body text-primary-foreground/80">
                Традиционная русская керамика с уникальной сине-белой росписью
              </p>
            </div>
            <div>
              <h4 className="font-heading text-xl font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 font-body text-primary-foreground/80">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  info@gzhel.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-4 w-4" />
                  Московская обл., Раменский р-н
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-heading text-xl font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 font-body text-primary-foreground/80">
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб: 10:00 - 16:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center font-body text-primary-foreground/60">
            <p>© 2024 Гжель. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
