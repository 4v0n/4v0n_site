import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import Card from "./Card";

function Projectspage() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 1 },
    );
  }, []);

  return (
    <div ref={textRef} className="flex-grow flex flex-col items-center justify-center gap-y-4">
      <Card
        thumbnail="https://avatars.githubusercontent.com/u/90649313?v=4"
        thumbnailShape="circle"
        title="This website"
        thumbnailUrl="https://github.com/4v0n/4v0n_site"
        titleUrl={"https://github.com/4v0n/4v0n_site"}
        description={<p>
          Self explanatory.
        </p>}
        footer="My first time using react, tailwind and gsap!"
      />

      <Card
        thumbnail="https://media.discordapp.net/attachments/1075443722512244786/1090412476660727858/cropped.png?ex=66cb1101&is=66c9bf81&hm=375740ec4e235a9783e900b07aa0d352139a81bd15e36237cfc7732fb7689cc2&=&format=webp&quality=lossless&width=671&height=671"
        thumbnailShape="circle"
        title="GanyuBot"
        thumbnailUrl="https://github.com/4v0n/GanyuBot"
        titleUrl={"https://github.com/4v0n/GanyuBot"}
        description={
          <div>
            <p>
              A very simple discord bot written using Java and making use of JDA, Lavaplayer and Morphia.
            </p>
            <br/>
            Features:
            <ul className="list-disc list-inside ml-0">
              <li>Booru image search.</li>
              <li>Blackjack minigame with per-server leaderboards.</li>
              <li>Youtube music player with spotify conversion.</li>
              <li>Extremely extensible with modular commands, automatic command tree formation and isolated features.</li>
            </ul>
          </div>
        }
        footer="Unfortunately i'm no longer maintaining the bot :("
      />

      <Card
        thumbnail="https://media.discordapp.net/attachments/976147303377272872/1276932013466583141/logo512.png?ex=66cb531c&is=66ca019c&hm=4c02b5882eee02d8f7f09e5dbcbb92b272976de5a2dbe09712e6467d22a068ee&=&format=webp&quality=lossless"
        thumbnailShape="circle"
        title="Spending Tracker"
        thumbnailUrl="https://github.com/muhsin7/spending-tracker"
        titleUrl={"https://github.com/muhsin7/spending-tracker"}
        description={
          <div>
            <p>
              A spending tracker, allowing for tracking of spending with gamification through achievements.
            </p>
            <br/>
            <p>
              Worked in a team of 9, working on the backend. Got to work with express, mongoose and mocha for testing.
            </p>
            <br/>
          </div>
        }
      />

      <Card
        thumbnail="https://media.discordapp.net/attachments/976147303377272872/1276926342239092767/image.png?ex=66cb4dd4&is=66c9fc54&hm=3c788db1ac4c6c289ae77e272c267d348a73c4f26b74fd448acbc80dc0cff8a6&=&format=webp&quality=lossless"
        thumbnailShape="circle"
        title="Kilo Word Completion Extension"

        description={
          <div>
            <p>
            A simple extension of antirez's Kilo text editor to support word completion as a part of my university dissertation project.
            </p>
            <br/>
            <p>
              Made use of C and wrote trie and list structures from scratch with the necessary manipulation, traversal, search and sorting algorithms.
            </p>
            <br/>
            Features:
            <ul className="list-disc list-inside ml-0">
              <li>Prefix match word completion using a trie structure.</li>
              <li>Fuzzy match word completion using a trie and levenshtein distance.</li>
              <li>Added support for LaTeX editing.</li>
            </ul>
          </div>
        }
      />
    </div>
  );
}

export default Projectspage;