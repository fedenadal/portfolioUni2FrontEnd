import { Component } from '@angular/core';
import { Container, Main } from "tsparticles-engine";
import { MoveDirection, ClickMode, HoverMode, OutMode, Engine, tsParticles } from "tsparticles-engine";
import { loadFull } from "tsparticles";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-portfolio-angular';
  id = "tsparticles";

  particlesOptions = {
    background: {
      color: {
        value: "#090000"
      },
    },
    fpsLimit: 90,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse
        },
        resize: true
      },
      modes: {
        push: {
          quantity: 80,
        },
        repulse: {
          distance: 100,
          duration: 0.8
        }
      }
    },
    particles: {
      color: {
        value: "#FFFFFF "
      },
      links: {
        color: "#FFFFFF",
        distance: 150,
        enable: true,
        opacity: 0.8,
        width: 0.5,
      },
      collisions: {
        enable: true
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        limit: 250,
        value: 50
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 1, max: 3 },
      }
    },
    detectRetina: true
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);
    await loadFull(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size

  }
}
