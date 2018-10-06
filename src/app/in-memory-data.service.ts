import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Post } from './models/post';


export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 1, title: 'Flash', power: 1, thumbnail: 'http://www.superheldenkino.de/wordpress2/wp-content/uploads/2016/01/The-Flash-Staffel-2-3.jpg',
        description: `By tapping into the Speed Force, Wally can run, think, and act faster than light itself, and as impressive as that is, it doesn’t end there. He can also move through time, phase through matter, and even read/acquire knowledge at a hyper-accelerated rate.`,
        video: 'https://www.youtube.com/embed/Yj0l7iGKh8g' },
      { id: 2, title: 'Spiderman', power: 1.1, thumbnail: 'https://www.turn-on.de/media/cache/seo_social_image_filter/media/cms/2018/04/marvels-spider-man.jpg',
        description: `Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others, even while his personal life continues to offer plenty of obstacles.`,
        video: 'https://www.youtube.com/embed/XcO17hVjfWY' },
      { id: 3, title: 'Superman', power: 0.9, thumbnail: 'https://i0.wp.com/atomikpop.com/wp-content/uploads/2018/06/superman_600px.jpg?ssl=1',
        description: `Superman is one of the most well known and powerful DC superheroes. With only one weakness, the Man of Steel is not fun to fight against. Although he isn’t in the #1 spot on our list, he easily could be, especially since no one is completely sure of just how powerful Superman really is (he’s always holding back). Regardless, as one of the most respected superheroes in the universe, this Kryptonian is the real OG.`,
        video: 'https://www.youtube.com/embed/bRqAUqAFhNw' },
      { id: 4, title: 'Wonderwoman', power: 0.8, thumbnail: 'https://www.bolsamania.com/cine/wp-content/uploads/2017/11/45-1.jpg',
        description: `Wonder Woman has taken the superhero movie genre by storm in the Wonder Woman movie. Essentially a combination of Superman’s power and Batman’s fighting skills, the one thing keeping Wonder Woman from ranking any higher is her lack of perfect invulnerability. Granted, she can certainly withstand more than her share of blunt force trauma, but a really sharp weapon could do some damage.`,
        video: 'https://www.youtube.com/embed/Lj2U6AGrahc' },
      { id: 5, title: 'Batman', power: 1.2, thumbnail: 'https://static.kino.de/wp-content/uploads/2017/11/The_Dark_Knight_of_Gotham_City.jpg',
        description: `Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others, even while his personal life continues to offer plenty of obstacles.`,
        video: 'https://www.youtube.com/embed/hf26Usl_Ijo' },
      { id: 6, title: 'Thor', power: 1.1, thumbnail: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2017/02/Thor-The-Dark-World-Convergence.jpg',
        description: `A Marvel superhero, Thor is the Norse God of thunder. Thor is not only invincible in almost every sense of the word, but he takes the meaning of “skilled warrior” to an entirely new level. Moreover, he has a hammer that gives him almost absolute control over space and time.`,
        video: `https://www.youtube.com/embed/ue80QwXMRHg` },
      { id: 7, title: 'Goku', power: 0.1, thumbnail: 'https://avatarfiles.alphacoders.com/761/76105.png',
        description: `We know this isn’t going to make us any friends, but ever since “super sayain” became a household word, Goku found his way somewhere to the top of the really powerful superheroes list – albeit a somewhat non-standard superhero at that. But seriously, here we have a character essentially constructed on the assumption that there is no upper power limit whatsoever.`,
        video: `https://www.youtube.com/embed/45PRdVGq4oQ` },
        { id: 8, title: 'Black Bolt', power: 1.2, thumbnail: 'https://stmed.net/sites/default/files/styles/225x120/public/black-bolt-wallpapers-27519-3933819.jpg?itok=3Fcbbkjj',
        description: `As the king of a certain offshoot of humanity known as the “inhumans,” the Black Bolt has been described even by other superheroes as one of the most powerful beings in the universe. Capable of some serious energy manipulation, the Bolt can use this power to increase any of his abilities to ridiculous levels. His greatest weapon, however, is his thunderous voice. Even a whisper has shown itself capable of shattering the Hulk’s bones, and it has been said that a shout would destroy an entire planet.`,
        video: `https://www.youtube.com/embed/KaaLbjZ3mj8` },
        { id: 9, title: 'Green Lantern', power: 0.7, thumbnail: 'http://p0.ipstatp.com/large/005b325eac2fc097e602',
        description: `In possession of the “most powerful weapon in the universe,” the power ring wielded by the Green Lantern grants him abilities that are seemingly limited only by his imagination. He’s also one of the key figures in the DC universe. The only real downside is that like any other super cool gadget, it has to be recharged, and usually when it’s needed most.`,
        video: `https://www.youtube.com/embed/_axLoYlwwmU` },
        { id: 10, title: 'Martian Manhunter', power: 1.3, thumbnail: 'https://o.aolcdn.com/images/dims?thumbnail=640%2C480&quality=80&image_uri=https%3A%2F%2Fwww.blogcdn.com%2Fwww.joystiq.com%2Fmedia%2F2013%2F07%2Fmartianmanhunter.png&client=amp-blogside-v2&signature=3686ee19e66a399372b844fcd7f4592a058c9658',
        description: `Second only to Dr. Manhattan in terms of sheer ability, the Manhunter owns a laundry list of supermanish superpowers. It doesn’t stop there though. He also has 9 different senses, powerful telepathic skills, and the ability to regenerate himself.`,
        video: `https://www.youtube.com/embed/m61-5a85G4w` },
        { id: 11, title: 'Spawn', power: 0.6, thumbnail: 'http://www.techsmart.co.za/data/articles/basic/features/news/news/Spawn-reboot-gets-Jeremy-Renner-alongside-Jamie-Foxx/mz0380_1024x1024.jpg',
        description: `Mercilessly executed by his own men, Al Simmons was once the government’s top soldier and most effective assassin. While in hell, he made a deal with the Devil that would grant him the ability to do virtually anything that he wanted. The catch? His powers would eventually run out and drag him back to the pit from whence he came.`,
        video: `https://www.youtube.com/embed/nkT6n8U7GX0` },
        { id: 12, title: 'Professor X', power: 1.4, thumbnail: 'https://i.kinja-img.com/gawker-media/image/upload/s--y42H4i-R--/c_fill,fl_progressive,g_center,h_480,q_80,w_640/jpsedv4ywboqlqnbuahz.jpg',
        description: `As the most powerful telepath in the Universe, Professor X has not only been responsible for the training of many other powerful mutants, but for their protection as well.`,
        video: `https://www.youtube.com/embed/bf7FKe0TkFc` },
        { id: 13, title: 'Mister Majestic', power: 0.5, thumbnail: 'https://inari.aerdan.org/~KalirSavant/killer7/handsome%20men/killer057.png',
        description: `As one of the most powerful superheroes in the Wildstorm universe, Mister Majestic bears a deliberate resemblance to Superman. With essentially all of his powers, we just couldn’t rank a copy above the man himself.`,
        video: `https://www.youtube.com/embed/fIKzi1GAIms` },
        { id: 14, title: 'Wolverine', power: 1, thumbnail: 'https://assets3.thrillist.com/v1/image/2250977/size/tmg-facebook_social.jpg',
        description: `Although Wolverine doesn’t have any of the typical superhero powers, it’s the intangibles that put him on the list. What he lacks in raw power he makes up for with pure fury and an epic complex backstory. And as we’ve seen with Dr. Manhattan, attitude is half the battle.`,
        video: `https://www.youtube.com/embed/R5B3UD3XVL8` },
        { id: 15, title: 'Captain Atom', power: 0.6, thumbnail: 'https://stmed.net/sites/default/files/styles/225x120/public/captain-atom-wallpapers-27535-2162545.jpg?itok=WpyMB5xN',
        description: `Essentially a combination of Superman and the Silver Surfer, Captain Atom is sometimes seen as a second rate man-of-steel. His powers are formidable, however, with the ability to manipulate theoretically unlimited amounts of energy.`,
        video: `https://www.youtube.com/embed/ON-HNsmEIIo` },
        { id: 16, title: 'Phoenix', power: 1.1, thumbnail: 'https://orig00.deviantart.net/94c6/f/2015/190/0/c/mvc_phoenix_jean_grey_by_superfernandoxt-d90nrnm.png',
        description: `As one of the most powerful telepaths in the universe, Jean Grey sometimes has trouble keeping her nearly unlimited mental powers in check. Professor X was even forced to construct psychic shields in her mind as a child in order to prevent her from fully realizing her power until she was mature enough to handle it on her own.`,
        video: `https://www.youtube.com/embed/whbar1UW1cs` },
        { id: 17, title: 'Dr. Manhattan', power: 0.7, thumbnail: 'https://imperiya.by/image/cYoUwlCb8-r.jpg',
        description: `When it comes to pure, raw, unadulterated power, there are few people that come even close to the doctor. In fact, there is almost no defined limit to what he can do. The reason he is at #20 however, is due to his primary weakness (besides tachyons) – apathy. In spite of being able to annihilate essentially the entire universe, he just doesn’t care enough about much of anything and would prefer to be left alone.`,
        video: `https://www.youtube.com/embed/sNXohNU3tWo` },
        { id: 18, title: 'Iron Man', power: 1.2, thumbnail: 'https://i.pinimg.com/originals/ab/38/92/ab3892382d938827256b32b8bc9df06c.jpg',
        description: `Although Iron Man has had his weak moments, his armor has proven itself worthy against the likes of Thor, Hulk, and other superheroes on this list. He’s also shown that he has enough swag to get his own list. Also, given that he’s constantly evolving, we wouldn’t be surprised to see him continue crawling up the power charts.`,
        video: `https://www.youtube.com/embed/5mMrlzTCxYw` },
        { id: 19, title: 'Captain Marvel', power: 0.8, thumbnail: 'http://www.techsmart.co.za/data/articles/basic/features/news/news/First-on-set-photo-of-Brie-Larson-as-Captain-Marvel-surfaces/captain-marvel.jpg',
        description: `Formerly known as Mrs. Marvel, Captain Marvel (a.k.a. Carol Danvers) was an Air Force pilot, C.I.A. agent, and N.A.S.A. security director before an encounter with a Kree explosive and a Kree warrior gave her the power to become Captain Marvel. With her powers of strength, flight, and energy blasts, we hope she is strong enough to save the Avengers in Avengers 4!`,
        video: `https://www.youtube.com/embed/rryMP7aJ12o` },
        { id: 20, title: 'Namor', power: 1.2, thumbnail: 'https://www.businessinsider.in/thumb/msid-64097914,width-640,resizemode-4/Namor-the-Sub-Mariner.jpg?1467517',
        description: `Half-human and half-atlantean, Namor the sub-mariner was one of the earliest superheroes in the Marvel universe. The stereotypical antihero, his short fuse and long list of superpowers would make him a formidable foe.`,
        video: `https://www.youtube.com/embed/V5QPnqgt4OE` },
    ];
    const posts:  Post[] = [
      {
      id: 4,
      title: 'Component Interaction',
      date: '10.07.2018',
      imageURL: 'https://ng5-experience.firebaseapp.com/assets/images/unconditionallove.jpg',
      body: '...'
      },
      {
      id: 3,
      title: 'Lifecycle Hooks',
      date: '10.06.2018',
      imageURL: 'https://ng5-experience.firebaseapp.com/assets/images/running.jpg',
      body: '...'
      },
      {
      id: 2,
      title: 'Template Syntax',
      date: '10.05.2018',
      imageURL: 'https://ng5-experience.firebaseapp.com/assets/images/github1.png',
      body: `
      INTERPOLATION:

      <p>My current hero name is {{ currentHero.name }}</p>
      <h3>
              {{ title }}
              <img src="{{ heroImageUrl }}" style="height: 100px">
      </h3>
      <p>The sum of 1 + 1 is {{ 1 + 1 }}</p>
      <p>The sum of 1 + 1 is not {{ 1 + 1 + getNumber() }}</p>


      TEMPLATE EXPRESSIONS EXPRESSION CONTEXT:

      {{ title }}
      <span [hidden]="isUnchanged">changed</span>
      <div *ngFor="let hero of heroes">{{ hero.name }}</div>
      <input #heroInput (keyup)="0"> {{ heroInput.value }}


      TEMPLATE STATEMENTS STATEMENT CONTEXT:

      <button (click)="deleteHero()">Delete Hero</button>
      <button (click)="onSaveHer($event)">Save Her</button>
      <button *ngFor="let hero of heroes" (click)="deleteHero(hero)">
      {{ hero.name }}
      </button>
      <form #heroForm (ngSubmit)="onSubmit(heroForm)">...</form>


      BINDING SYNTAX OVERVIEW:

      // one way from component to view
      {{ expression }}
      [target]="expression"
      bind-target="expression"
      // one way from view to component
      (target)="statement"
      on-target="statement"
      // two way
      [(target)]="expression"
      bindon-target="expression"


      NEW MENTAL MODEL:

      <div [class.special]="isSpecial">New Mental Model</div>
      <app-hero-detail></app-hero-detail>
      <button [disabled]="isUnchanged">Save Her</button>
      <img [src]="heroImageUrl">
      <app-hero-detail [hero]="currentHero"></app-hero-detail>
      <div [ngClass]="{ 'special': isSpecial }">special</div>
      <button (click)="onSave()">Save</button>
      <app-hero-detail (deleteRequest)="deleteHero()"></app-hero-detail>
      <div (myClick)="clicked=$event" clickable>Click Me</div>
      {{ clicked }}
      <div>
            Hero Name:
            <input [(ngModel)]="name"> {{ name }}
      </div>
      <button [attr.aria-label]="help">Help</button>
      <div [class.red]="isRed">Favorite</div>
      <button [style.color]="isSpecial ? 'blue' : 'red'">Special</button>


      BINDING TARGETS:

      // Property
      <img [src]="heroImageUrl">
      <app-hero-detail [hero]="currentHero"></app-hero-detail>
      <div [ngClass]="{'special': isSpecial }">special</div>

      // Event
      <button (click)="onSave()">Save</button>
      <app-hero-detail (deleteRequest)="deleteHero()"></app-hero-detail>
      <div (myClick)="clicked=$event" clickable>Click Me</div>

      // Two Way
      <input [(ngModel)]="name">

      // Attribute
      <button [attr.aria-label]="help">Help</button>

      // Class
      <div [class.special]="isSpecial">Special</div>

      // Style
      <button [style.color]="isSpecial ? 'red' : 'green'">special</button>


      PROPERTY BINDING:

      <img [src]="heroImageUrl">
      <img bind-src="heroImageUrl"> // canonical form
      <button [disabled]="isUnchanged">Cancel is disabled</button>
      <div [ngClass]="classes">[ngClass] binding to classes property</div>
      <app-hero-detail [hero]="currentHero"></app-hero-detail>
      <app-hero-detail prefix="You are my" [hero]="currentHero"></app-hero-detail>

      <p><img src="{{ heroImageUrl }}"> is the <i>interpolated</i> image.</p>
      <p><img [src]="heroImageUrl"> is the <i>property bound</i> image.</p>

      <p><span>"{{ title }}" is the <i>interpolated</i> title.</span></p>
      <p><span [innerHTML]="title"></span> is the <i>property bound</i> title.</p>

      evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';

      <p><span>"{{ evilTitle }}" is the <i>interpolated</i> evil title.</span></p>
      <p><span [innerHTML]="evilTitle"></span> <i>is the property bound</i> evil title.</p>


      ATTRIBUTE BINDING:

      <table border="1">
          <tr><td [attr.colspan]="1 + 1">One-Two</td></tr>
          <tr><td>Three</td><td>Four</td></tr>
      </table>
      <button [attr.aria-label]="actionName">{{ actionName }}</button>


      CLASS BINDING:

      <div class="nice curly special" [class]="niceCurly">Nice curly</div>
      <div [class.special]="isSpecial">This class binding is special</div>
      <div class="special" [class.special]="!isSpecial">This one is not so special</div>

      `
        },
      {
      id: 1,
      title: 'Displaying Data',
      date: '10.04.2018',
      imageURL: 'https://ng5-experience.firebaseapp.com/assets/images/sun.jpg',
      body: `
      INTERPOLATION:

      import { Component } from '@angular/core';

      @Component({
      selector: 'app-root',
      template: \`
            <h1>{{ title }}</h1>
            <h2>My favorite hero is {{ myHero }}</h2>
      \`
      })
      export class AppComponent {
      title = 'Tour of Heroes';
      myHero = 'Flash';
      }


      LOOPING:

      import { Component } from '@angular/core';

      @Component({
        selector: 'app-root',
        template: \`
                  <h1>{{ title }}</h1>
                  <h2>My favorite hero is {{ myHero }}</h2>
                  <ul>
                      <li *ngFor="let hero of heroes">
                          {{ hero }}
                      </li>
                  </ul>
        \`
      })
      export class AppComponent {
        title = 'Tour of Heroes';
        heroes = ['Flash', 'Wonderwoman', 'Superman', 'Spiderman'];
        myHero = this.heroes[0];
      }


      HERO CLASS:

      export class Hero {
        constructor(public id: number, public name: string) {}
    }


    USE HERO CLASS:

    import { Component } from '@angular/core';
    import { Hero } from './hero';

    @Component({
      selector: 'app-root',
      template: \`
                <h1>{{ title }}</h1>
                <h2>My favorite hero is {{ myHero.name }}</h2>
                <p>Heroes:</p>
                <ul>
                    <li *ngFor="let hero of heroes">
                        {{ hero.name }}
                    </li>
                </ul>
      \`
    })
    export class AppComponent {
      title = 'Tour of Heroes';
      heroes = [
            new Hero(1, 'Flash'),
            new Hero(13, 'Wonderwoman'),
            new Hero(15, 'Superman'),
            new Hero(42, 'Spiderman')
          ];
      myHero = this.heroes[0];
    }


    CONDITIONAL STATEMENT:

    <p *ngIf="heroes.length > 3">We are many Open Source Heroes!</p>

      `
        }
    ];
    return { heroes, posts };
  }
}
