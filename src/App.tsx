
import React, { useState, useEffect, useRef } from 'react';
import profile from "./assets/portfolio_image.png";


import { 
  Terminal, User, Code, Gamepad2, Globe, X, Minus, Maximize2, Minimize2, 
  Github, Instagram, Linkedin, BookOpen, Search, Wifi, Battery, Play, RotateCcw, 
  Aperture, Download, Twitter, Monitor
} from 'lucide-react';

// --- Types & Interfaces ---

interface WindowState {
  id: string;
  title: string;
  icon: React.ReactNode;
  component: React.ReactNode;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

interface AppIcon {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
}

// --- Content Components ---

const AboutContent = () => (
  <div className="p-8 font-sans text-gray-800 h-full overflow-y-auto bg-gradient-to-br from-white to-gray-50">
    <div className="flex flex-col items-center mb-8">
      <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 mb-4 shadow-xl flex items-center justify-center text-white text-4xl font-bold border-4 border-white overflow-hidden relative">
         <span className="z-10"><img src={profile} alt="image" className="w-full h-full object-cover" /></span>
         <div className="absolute inset-0 bg-black/10"></div>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Rishav Singh</h1>
      <p className="text-blue-600 font-medium mt-1">MERN Stack Developer | Class 12 Science | Nepal</p>
    </div>
    
    <div className="max-w-3xl mx-auto space-y-8 pb-8">
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold border-b pb-3 mb-4 text-gray-800 flex items-center gap-2">
           👋 About Me
        </h2>
        <p className="leading-relaxed text-gray-600 text-lg">
          I am a passionate <span className="font-semibold text-green-700">MERN Stack Developer</span> from Nepal, currently studying in Class 12 (Science). 
          I focus on building modern, scalable web applications and continuously improving my skills through real-world projects. 
          Currently working on an AI-powered flight booking website and a React Native alcohol delivery app for a client.
        </p>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold border-b pb-3 mb-4 text-gray-800 flex items-center gap-2">
           🏆 Achievements
        </h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full flex-shrink-0"></span>
            <span className="text-gray-700">Full-stack MERN Developer with focus on scalable web applications</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-3 bg-purple-500 rounded-full flex-shrink-0"></span>
            <span className="text-gray-700">AI-powered flight booking platform developer</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-3 bg-green-500 rounded-full flex-shrink-0"></span>
            <span className="text-gray-700">React Native application development experience</span>
          </li>
        </ul>
      </section>
    </div>
  </div>
);

const SkillsExperienceContent = () => (
  <div className="bg-[#1e1e1e] h-full text-gray-300 font-mono text-sm flex flex-col">
    <div className="flex items-center px-4 py-2 bg-[#252526] border-b border-[#1e1e1e] select-none">
      <span className="text-blue-400 mr-2 flex items-center gap-1"><Code size={12}/> resume.json</span>
      <span className="text-xs text-gray-500 ml-auto">UTF-8</span>
    </div>
    <div className="flex-1 overflow-auto p-4 cursor-text selection:bg-blue-500/30">
      <div className="space-y-1">
        <span className="text-purple-400">const</span> <span className="text-yellow-300">profile</span> <span className="text-white">=</span> <span className="text-yellow-300">{`{`}</span>
        
        <div className="pl-6">
          <span className="text-blue-300">"skills"</span>: [<br/>
            <span className="pl-4 text-green-300">"JavaScript", "React.js", "React Native", "Node.js", "MongoDB", "TailwindCSS", "Express.js", "Web Development"</span><br/>
          ],
        </div>

        <div className="pl-6 mt-2">
          <span className="text-blue-300">"experience"</span>: [
          <div className="pl-4 group hover:bg-white/5 p-1 rounded transition-colors">
            <span className="text-yellow-300">{`{`}</span><br/>
            <span className="pl-4 text-sky-300">"project"</span>: <span className="text-orange-300">"AI-powered Flight Booking Website"</span>,<br/>
            <span className="pl-4 text-sky-300">"role"</span>: <span className="text-orange-300">"Full-stack Developer"</span>,<br/>
            <span className="pl-4 text-sky-300">"status"</span>: <span className="text-orange-300">"In Progress"</span>,<br/>
            <span className="pl-4 text-sky-300">"tech"</span>: <span className="text-orange-300">"MERN Stack with AI Integration"</span><br/>
            <span className="text-yellow-300">{`},`}</span>
          </div>
          <div className="pl-4 group hover:bg-white/5 p-1 rounded transition-colors">
            <span className="text-yellow-300">{`{`}</span><br/>
            <span className="pl-4 text-sky-300">"project"</span>: <span className="text-orange-300">"React Native Alcohol Delivery App"</span>,<br/>
            <span className="pl-4 text-sky-300">"role"</span>: <span className="text-orange-300">"Mobile Developer"</span>,<br/>
            <span className="pl-4 text-sky-300">"client"</span>: <span className="text-orange-300">"Commercial Client"</span>,<br/>
            <span className="pl-4 text-sky-300">"tech"</span>: <span className="text-orange-300">"React Native, Firebase"</span><br/>
            <span className="text-yellow-300">{`}`}</span>
          </div>
          ],
        </div>

        <div className="pl-6 mt-2">
          <span className="text-blue-300">"education"</span>: [
          <div className="pl-4 group hover:bg-white/5 p-1 rounded transition-colors">
            <span className="text-yellow-300">{`{`}</span><br/>
            <span className="pl-4 text-sky-300">"current"</span>: <span className="text-orange-300">"Class 11 Science"</span>,<br/>
            <span className="pl-4 text-sky-300">"location"</span>: <span className="text-orange-300">"Nepal"</span>,<br/>
            <span className="pl-4 text-sky-300">"focus"</span>: <span className="text-orange-300">"Full-stack Web Development"</span><br/>
            <span className="text-yellow-300">{`}`}</span>
          </div>
          ],
        </div>
        <span className="text-yellow-300">{`}`}</span>;
      </div>
    </div>
  </div>
);

const BrowserContent = () => (
  <div className="flex flex-col h-full bg-white">
    <div className="bg-gray-100 border-b border-gray-200 p-3 flex items-center space-x-3 shadow-sm z-10">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
      </div>
      <div className="flex-1 bg-white rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 flex items-center shadow-inner">
        <Search size={14} className="mr-3 text-gray-400" />
        portfolio.rishav-singh.dev
      </div>
    </div>

    <div className="flex-1 overflow-auto p-6 bg-gray-50">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
        
        {/* Research */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
            <BookOpen className="text-blue-500" /> Research
          </h2>
          <div className="block group">
            <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">Timestamp extraction and Log classification</h3>
            <p className="text-xs font-semibold text-blue-500 uppercase tracking-wide mt-1">ETESM-2025 • Jun 2025</p>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">Presented a comparative study on using Supervised Machine Learning for system log analysis.</p>
          </div>
        </div>

        {/* Socials */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
            <Globe className="text-green-500" /> Socials
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <a href="https://www.linkedin.com/in/rishav-singh-521538369/" target="_blank" rel="noreferrer" className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors gap-3">
              <Linkedin size={20} className="text-blue-700" /> <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a href="https://github.com/rishav690999" target="_blank" rel="noreferrer" className="flex items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors gap-3">
              <Github size={20} className="text-gray-900" /> <span className="text-sm font-medium">GitHub</span>
            </a>
            <a href="https://www.instagram.com/rishav690999/" className="flex items-center p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors gap-3">
              <Instagram size={20} className="text-pink-600" /> <span className="text-sm font-medium">@rishav690999</span>
            </a>
             <a href="https://x.com/Rishav60999" className="flex items-center p-3 bg-black rounded-lg hover:bg-gray-800 transition-colors gap-3">
              <Twitter size={20} className="text-white" /> <span className="text-sm font-medium text-white">@Rishav60999</span>
            </a>
          </div>
        </div>

        {/* Projects */}
        <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
              <h3 className="font-bold text-lg text-blue-600">AI Flight Booking</h3>
              <p className="text-xs text-gray-500 mt-1 mb-2">MERN Stack, AI Integration</p>
              <p className="text-sm text-gray-600">Intelligent flight booking platform with AI-powered recommendations and dynamic pricing using machine learning.</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
              <h3 className="font-bold text-lg text-blue-600">Alcohol Delivery App</h3>
              <p className="text-xs text-gray-500 mt-1 mb-2">React Native, Firebase, Real-time</p>
              <p className="text-sm text-gray-600">Full-featured mobile app for alcohol delivery with real-time order tracking, payment integration, and user authentication.</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
              <h3 className="font-bold text-lg text-blue-600">Portfolio OS</h3>
              <p className="text-xs text-gray-500 mt-1 mb-2">React, TypeScript, Tailwind</p>
              <p className="text-sm text-gray-600">Interactive macOS-inspired portfolio website showcasing projects, skills, and professional experience through immersive desktop environment.</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
);

const PhotoBooth = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    let stream: MediaStream | null = null;
    
    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setError('');
      } catch (err) {
        setError('Camera access denied or unavailable.');
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const takePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(videoRef.current, 0, 0);
      setPhoto(canvas.toDataURL('image/png'));
    }
  };

  return (
    <div className="h-full bg-gray-900 flex flex-col items-center justify-center p-4">
      {error ? (
        <div className="text-red-400 text-center">
          <p>{error}</p>
          <p className="text-sm text-gray-500 mt-2">Please allow camera permissions.</p>
        </div>
      ) : (
        <>
          <div className="relative w-full max-w-md bg-black rounded-lg overflow-hidden shadow-2xl border border-gray-800">
             {!photo ? (
               <video ref={videoRef} autoPlay playsInline muted className="w-full h-auto transform scale-x-[-1]" />
             ) : (
               <img src={photo} alt="Captured" className="w-full h-auto transform scale-x-[-1]" />
             )}
          </div>
          
          <div className="mt-6 flex space-x-4">
            {!photo ? (
              <button 
                onClick={takePhoto} 
                className="w-16 h-16 rounded-full bg-white border-4 border-gray-300 shadow-lg hover:bg-gray-200 transition-colors flex items-center justify-center active:scale-95"
              >
                <div className="w-12 h-12 rounded-full border-2 border-black/10"></div>
              </button>
            ) : (
              <div className="flex space-x-4">
                <button 
                  onClick={() => setPhoto(null)} 
                  className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition"
                >
                  Retake
                </button>
                <a 
                  href={photo} 
                  download="photo-booth.png" 
                  className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition flex items-center gap-2"
                >
                  <Download size={16} /> Save
                </a>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

const TerminalContent = () => {
  const [history, setHistory] = useState<string[]>(["Welcome to Rishav Singh OS v1.0", "Type 'help' to see commands."]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, `➜  ~ ${input}`];
      
      switch (cmd) {
        case 'help':
          newHistory.push("  about     - Bio", "  skills    - Tech Stack", "  projects  - My Work", "  socials   - Contact", "  clear");
          break;
        case 'about':
          newHistory.push("Rishav Singh | MERN Stack Developer | Nepal");
          break;
        case 'projects':
          newHistory.push("1. AI Flight Booking Platform (MERN/AI)", "2. React Native Alcohol Delivery App", "3. Portfolio OS (React/TypeScript)");
          break;
        case 'skills':
          newHistory.push("Languages: C++, JS, Python", "Tools: React, Node, Mongo, Git");
          break;
        case 'socials':
          newHistory.push("GitHub: rishav690999", "LinkedIn: rishav-singh-521538369", "Instagram: rishav690999", "Twitter: @Rishav60999");
          break;
        case 'clear':
          setHistory([]);
          setInput("");
          return;
        default:
          if (cmd) newHistory.push(`zsh: command not found: ${cmd}`);
      }
      
      setHistory(newHistory);
      setInput("");
    }
  };

  return (
    <div className="bg-[#1e1e1e] text-green-400 font-mono p-4 h-full overflow-auto text-sm">
      {history.map((line, i) => (
        <div key={i} className="mb-1 whitespace-pre-wrap">{line}</div>
      ))}
      <div className="flex items-center">
        <span className="mr-2 text-blue-400">➜  ~</span>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          className="bg-transparent outline-none flex-1 text-green-400"
          autoFocus
          spellCheck={false}
        />
      </div>
      <div ref={bottomRef} />
    </div>
  );
};

const SnakeGame = () => {
  const GRID_SIZE = 20;
  const SPEED = 100;
  
  const [snake, setSnake] = useState([{x: 10, y: 10}]);
  const [food, setFood] = useState({x: 15, y: 5});
  const [dir, setDir] = useState({x: 0, y: -1});
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying || gameOver) return;
    const moveSnake = setInterval(() => {
      setSnake(prev => {
        const newHead = { x: prev[0].x + dir.x, y: prev[0].y + dir.y };
        if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE || prev.some(s => s.x === newHead.x && s.y === newHead.y)) {
          setGameOver(true);
          return prev;
        }
        const newSnake = [newHead, ...prev];
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore(s => s + 10);
          setFood({ x: Math.floor(Math.random() * GRID_SIZE), y: Math.floor(Math.random() * GRID_SIZE) });
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, SPEED);
    return () => clearInterval(moveSnake);
  }, [isPlaying, gameOver, dir, food]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      switch(e.key) {
        case 'ArrowUp': if(dir.y !== 1) setDir({x: 0, y: -1}); break;
        case 'ArrowDown': if(dir.y !== -1) setDir({x: 0, y: 1}); break;
        case 'ArrowLeft': if(dir.x !== 1) setDir({x: -1, y: 0}); break;
        case 'ArrowRight': if(dir.x !== -1) setDir({x: 1, y: 0}); break;
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [dir]);

  const startGame = () => {
    setSnake([{x: 10, y: 10}]);
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
    setDir({x: 0, y: -1});
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-900 text-white p-4 relative overflow-hidden">
      <div className="absolute top-4 left-4 font-mono text-xl text-green-400">SCORE: {score}</div>
      <div className="relative bg-black border-4 border-gray-700 rounded-lg shadow-2xl" 
           style={{ width: '100%', maxWidth: '400px', aspectRatio: '1/1', display: 'grid', gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}>
         {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
            const x = i % GRID_SIZE;
            const y = Math.floor(i / GRID_SIZE);
            const isSnake = snake.some(s => s.x === x && s.y === y);
            const isFood = food.x === x && food.y === y;
            return <div key={i} className={`${isSnake ? 'bg-green-500 rounded-sm' : isFood ? 'bg-red-500 rounded-full' : 'bg-gray-800/30'} border border-white/5`}></div>;
         })}
         {(!isPlaying || gameOver) && (
           <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-10">
             <h2 className="text-3xl font-bold mb-4 text-green-400 font-mono">{gameOver ? 'GAME OVER' : 'SNAKE OS'}</h2>
             <button onClick={startGame} className="flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-500 text-white rounded-full font-bold transition">
               {gameOver ? <RotateCcw size={18}/> : <Play size={18}/>} {gameOver ? 'Retry' : 'Start'}
             </button>
           </div>
         )}
      </div>
    </div>
  );
};

// --- Menu Bar Component ---

type MenuSeparator = {
  type: "separator";
};

type MenuActionItem = {
  type?: undefined;
  label: string;
  action?: () => void;
  shortcut?: string;
};

type MenuItem = MenuSeparator | MenuActionItem;

type TopBarProps = {
  title: string;
  activeMenu: string | null;
  setActiveMenu: (m: string | null) => void;
};

const TopBar = ({ title, activeMenu, setActiveMenu }: TopBarProps) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const menus: Record<string, MenuItem[]> = {
    "": [
      { label: "About This Portfolio", action: () => alert("Rishav Singh's Portfolio OS - Built with React & TypeScript") },
      { label: "System Preferences...", action: () => {} },
      { type: "separator" },
      { label: "Sleep", action: () => alert("Zzz...") },
      { label: "Restart", action: () => window.location.reload() },
      { label: "Shut Down", action: () => window.close() },
    ],

    File: [
      { label: "New Window", shortcut: "⌘N", action: () => {} },
      { label: "Close Window", shortcut: "⌘W", action: () => {} },
      { type: "separator" },
      { label: "Download Resume", action: () => window.open("https://www.linkedin.com/in/rishav-singh-521538369/", "_blank") },
    ],

    Edit: [
      { label: "Undo", shortcut: "⌘Z" },
      { label: "Redo", shortcut: "⇧⌘Z" },
      { type: "separator" },
      { label: "Cut", shortcut: "⌘X" },
      { label: "Copy", shortcut: "⌘C" },
      { label: "Paste", shortcut: "⌘V" },
    ],

    View: [
      { label: "Enter Full Screen", shortcut: "^⌘F" },
      { label: "Actual Size", shortcut: "⌘0" },
    ],

    Help: [
      { label: "Portfolio Help" },
      { label: "View Source Code", action: () => window.open("https://github.com/rishav690999", "_blank") },
    ],
  };

  return (
    <div
      className="h-8 w-full bg-black/20 backdrop-blur-xl flex items-center justify-between px-4 text-white text-sm fixed top-0 z-50 shadow-sm border-b border-white/5 select-none"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center space-x-4 h-full">
        {Object.entries(menus).map(([key, items]) => (
          <div key={key} className="relative h-full flex items-center">
            <span
              className={`cursor-default px-2.5 py-1 rounded transition-colors font-medium ${
                activeMenu === key ? "bg-white/20" : "hover:bg-white/10"
              } ${key === "" ? "text-base font-bold pb-1.5" : "text-xs"}`}
              onClick={() => setActiveMenu(activeMenu === key ? null : key)}
            >
              {key}
            </span>

            {activeMenu === key && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-white/90 backdrop-blur-xl rounded-lg shadow-xl border border-white/20 py-1.5 z-50 text-black animate-in fade-in slide-in-from-top-1 duration-100">
                {items.map((item, idx) =>
                  item.type === "separator" ? (
                    <div key={idx} className="h-[1px] bg-black/10 my-1 mx-2" />
                  ) : (
                    <div
                      key={idx}
                      className="px-4 py-1.5 hover:bg-blue-500 hover:text-white flex justify-between items-center cursor-default group"
                      onClick={() => {
                        item.action?.();
                        setActiveMenu(null);
                      }}
                    >
                      <span>{item.label}</span>
                      {item.shortcut && (
                        <span className="text-gray-400 group-hover:text-white/80 text-xs">
                          {item.shortcut}
                        </span>
                      )}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        ))}
        {title && <span className="font-bold text-xs ml-2 opacity-80 hidden sm:block">{title}</span>}
      </div>

      <div className="flex items-center space-x-4 text-xs font-medium text-white/90">
        <div className="hidden sm:flex items-center space-x-3 opacity-80">
          <Battery size={16} /> <Wifi size={16} /> <Search size={16} />
        </div>
        <span>
          {date.toLocaleString([], {
            weekday: "short",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
};

// --- Main App Component ---

const App = () => {
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [zIndexCounter, setZIndexCounter] = useState(10);
  const [draggedWindow, setDraggedWindow] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false); // Mobile state check
  const dragRef = useRef<{ id: string; startX: number; startY: number; initialLeft: number; initialTop: number } | null>(null);

  useEffect(() => {
    // Check screen size on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is a common tablet/mobile breakpoint
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const appIcons: AppIcon[] = [
    { id: 'finder', name: 'About Rishav', icon: <User size={28} className="text-white drop-shadow-md" />, color: 'bg-gradient-to-b from-blue-400 to-blue-600' },
    { id: 'safari', name: 'Safari', icon: <Globe size={28} className="text-white drop-shadow-md" />, color: 'bg-gradient-to-b from-blue-300 to-blue-500' },
    { id: 'vscode', name: 'Code', icon: <Code size={28} className="text-white drop-shadow-md" />, color: 'bg-gradient-to-b from-gray-700 to-gray-900' },
    { id: 'terminal', name: 'Terminal', icon: <Terminal size={28} className="text-white drop-shadow-md" />, color: 'bg-gradient-to-b from-gray-800 to-black' },
    { id: 'camera', name: 'Camera', icon: <Aperture size={28} className="text-white drop-shadow-md" />, color: 'bg-gradient-to-b from-gray-300 to-gray-500' },
    { id: 'arcade', name: 'Arcade', icon: <Gamepad2 size={28} className="text-white drop-shadow-md" />, color: 'bg-gradient-to-b from-purple-400 to-purple-600' },
  ];

  const [windows, setWindows] = useState<WindowState[]>([
    { 
      id: 'finder', 
      title: 'Rishav Singh', 
      icon: <User size={16} />, 
      component: <AboutContent />, 
      isOpen: true, 
      isMinimized: false, 
      isMaximized: false,
      zIndex: 1, 
      position: { x: 50, y: 50 }, 
      size: { width: 800, height: 600 } 
    }
  ]);

  // Optimized Drag Logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragRef.current) return;
      e.preventDefault();
      const { id, startX, startY, initialLeft, initialTop } = dragRef.current;
      setWindows(prev => prev.map(w => w.id === id ? { ...w, position: { x: initialLeft + (e.clientX - startX), y: Math.max(32, initialTop + (e.clientY - startY)) } } : w));
    };
    const handleMouseUp = () => {
      dragRef.current = null;
      setDraggedWindow(null);
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => { document.removeEventListener('mousemove', handleMouseMove); document.removeEventListener('mouseup', handleMouseUp); };
  }, []);

  const openApp = (appId: string) => {
    const existingWindow = windows.find(w => w.id === appId);
    if (existingWindow) {
      if (existingWindow.isMinimized) {
        setWindows(prev => prev.map(w => w.id === appId ? { ...w, isMinimized: false, zIndex: zIndexCounter + 1 } : w));
        setActiveWindow(appId);
        setZIndexCounter(prev => prev + 1);
      } else if (activeWindow === appId) {
        setWindows(prev => prev.map(w => w.id === appId ? { ...w, isMinimized: true } : w));
        setActiveWindow(null);
      } else {
        setActiveWindow(appId);
        setZIndexCounter(prev => prev + 1);
        setWindows(prev => prev.map(w => w.id === appId ? { ...w, zIndex: zIndexCounter + 1 } : w));
      }
    } else {
      const appData = appIcons.find(a => a.id === appId);
      let content, title = appData?.name || 'App', size = { width: 800, height: 600 };
      switch(appId) {
        case 'finder': content = <AboutContent />; title = 'Rishav Singh'; break;
        case 'safari': content = <BrowserContent />; title = 'Safari'; size = { width: 950, height: 680 }; break;
        case 'vscode': content = <SkillsExperienceContent />; title = 'VS Code'; break;
        case 'terminal': content = <TerminalContent />; title = 'Terminal'; size = { width: 600, height: 400 }; break;
        case 'camera': content = <PhotoBooth />; title = 'Photo Booth'; size = { width: 500, height: 600 }; break;
        case 'arcade': content = <SnakeGame />; title = 'Arcade'; size = { width: 440, height: 520 }; break;
        default: content = <div>Content not found</div>;
      }
      setWindows(prev => [...prev, { id: appId, title, icon: appData?.icon, component: content, isOpen: true, isMinimized: false, isMaximized: false, zIndex: zIndexCounter + 1, position: { x: 80 + (windows.length * 30), y: 80 + (windows.length * 30) }, size }]);
      setZIndexCounter(prev => prev + 1);
      setActiveWindow(appId);
    }
  };

  const closeWindow = (id: string, e?: React.MouseEvent) => { e?.stopPropagation(); setWindows(prev => prev.filter(w => w.id !== id)); if (activeWindow === id) setActiveWindow(null); };
  const minimizeWindow = (id: string, e?: React.MouseEvent) => { e?.stopPropagation(); setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true } : w)); setActiveWindow(null); };
  const maximizeWindow = (id: string, e?: React.MouseEvent) => { e?.stopPropagation(); setWindows(prev => prev.map(w => w.id === id ? { ...w, isMaximized: !w.isMaximized } : w)); };
  const focusWindow = (id: string) => { if (activeWindow !== id) { setZIndexCounter(prev => prev + 1); setWindows(prev => prev.map(w => w.id === id ? { ...w, zIndex: zIndexCounter + 1 } : w)); setActiveWindow(id); } };
  const startDrag = (e: React.MouseEvent, id: string) => { if (windows.find(w => w.id === id)?.isMaximized) return; focusWindow(id); setDraggedWindow(id); const wObj = windows.find(w => w.id === id); if (wObj) dragRef.current = { id, startX: e.clientX, startY: e.clientY, initialLeft: wObj.position.x, initialTop: wObj.position.y }; };

  const getDockIconPos = (appId: string) => {
    const index = appIcons.findIndex(a => a.id === appId);
    if (index === -1) return '50%';
    const total = appIcons.length;
    return `calc(50vw + ${(index - (total - 1) / 2) * 68}px)`;
  };

  // If mobile, show restriction message
  if (isMobile) {
    return (
      <div className="h-screen w-screen bg-gray-900 flex flex-col items-center justify-center p-6 text-center text-white">
        <div className="w-24 h-24 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-xl border border-gray-700">
          <Monitor size={48} className="text-blue-500" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Desktop Only Experience</h2>
        <p className="text-gray-400 max-w-md leading-relaxed text-lg">
          This portfolio OS is designed for larger screens. <br/>
          <span className="text-gray-500 text-base mt-2 block">
            Kindly view on a laptop or desktop for the best interactive experience.
          </span>
        </p>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen overflow-hidden font-sans select-none relative text-gray-900 bg-gray-900" onClick={() => { setActiveWindow(null); setActiveMenu(null); }}>
      
      {/* Reliable Background Image - MacOS Style */}
      <img 
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-100"
        alt="MacOS Wallpaper" 
      />
      
      {/* Top Menu Bar */}
      <TopBar title={activeWindow ? windows.find(w => w.id === activeWindow)?.title || '' : 'Rishav Singh'} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      {/* Desktop Area */}
      <div className="relative w-full h-full pt-8 pb-24 z-10">
        
        {/* Desktop Icons */}
        <div className="absolute right-4 top-12 flex flex-col items-end gap-6 p-2 z-0">
           <div className="group flex flex-col items-center cursor-pointer w-20" onDoubleClick={() => openApp('safari')}>
             <div className="w-14 h-12 bg-blue-400/90 rounded-t-sm rounded-b-lg shadow-lg group-hover:bg-blue-300 transition-colors flex items-center justify-center border-t border-white/30 backdrop-blur-sm"><Globe className="text-white/90 w-6 h-6" /></div>
             <span className="text-white text-xs mt-1 font-medium bg-black/20 px-2 py-0.5 rounded-md shadow-sm backdrop-blur-sm">Projects</span>
           </div>
           <div className="group flex flex-col items-center cursor-pointer w-20" onDoubleClick={() => openApp('vscode')}>
             <div className="w-14 h-12 bg-blue-400/90 rounded-t-sm rounded-b-lg shadow-lg group-hover:bg-blue-300 transition-colors flex items-center justify-center border-t border-white/30 backdrop-blur-sm"><Code className="text-white/90 w-6 h-6" /></div>
             <span className="text-white text-xs mt-1 font-medium bg-black/20 px-2 py-0.5 rounded-md shadow-sm backdrop-blur-sm">Resume</span>
           </div>
        </div>

        {/* Windows */}
        {windows.map((win) => {
             const isDragging = draggedWindow === win.id;
             return (
               <div
                 key={win.id}
                 className={`absolute flex flex-col bg-white rounded-xl shadow-2xl overflow-hidden ring-1 ring-black/10 ${isDragging ? '' : 'transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]'}`}
                 style={{ 
                   width: win.isMaximized ? '100vw' : win.size.width, 
                   height: win.isMaximized ? 'calc(100vh - 32px)' : win.size.height,
                   transformOrigin: `${getDockIconPos(win.id)} bottom`,
                   transform: win.isMinimized ? `translateY(100vh) scale(0)` : 'translateY(0) scale(1)',
                   opacity: win.isMinimized ? 0 : 1,
                   top: win.isMaximized ? 32 : win.position.y,
                   left: win.isMaximized ? 0 : win.position.x,
                   zIndex: win.zIndex,
                   pointerEvents: win.isMinimized ? 'none' : 'auto'
                 }}
                 onMouseDown={() => focusWindow(win.id)}
               >
                 <div className="h-9 bg-[#f3f3f3] border-b border-[#d1d1d1] flex items-center px-4 justify-between select-none" onMouseDown={(e) => startDrag(e, win.id)} onDoubleClick={(e) => maximizeWindow(win.id, e)}>
                    <div className="flex space-x-2 group">
                      <button onClick={(e) => closeWindow(win.id, e)} className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e] hover:bg-[#ff5f57]/80 flex items-center justify-center transition-colors"><X size={8} className="text-red-900 opacity-0 group-hover:opacity-100" /></button>
                      <button onClick={(e) => minimizeWindow(win.id, e)} className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d89e24] hover:bg-[#febc2e]/80 flex items-center justify-center transition-colors"><Minus size={8} className="text-yellow-900 opacity-0 group-hover:opacity-100" /></button>
                      <button onClick={(e) => maximizeWindow(win.id, e)} className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29] hover:bg-[#28c840]/80 flex items-center justify-center transition-colors">{win.isMaximized ? <Minimize2 size={8} className="text-green-900 opacity-0 group-hover:opacity-100" /> : <Maximize2 size={8} className="text-green-900 opacity-0 group-hover:opacity-100" />}</button>
                    </div>
                    <div className="text-sm font-semibold text-gray-600 flex items-center gap-2">{win.icon && <span className="text-gray-400">{win.icon}</span>} {win.title}</div>
                    <div className="w-14"></div>
                 </div>
                 <div className="flex-1 overflow-hidden bg-white relative">{win.component}</div>
               </div>
             );
        })}
      </div>

      {/* Dock */}
      <div className="fixed bottom-4 left-0 w-full flex justify-center z-[10000]">
        <div className="flex items-end space-x-3 px-4 pb-3 pt-3 bg-white/20 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl transition-all duration-300">
          {appIcons.map((app) => {
            // const isOpen = windows.some(w => w.id === app.id && !w.isMinimized);
            const isRunning = windows.some(w => w.id === app.id);
            return (
              <div key={app.id} className="group relative flex flex-col items-center">
                 <div className="absolute -top-14 bg-gray-800/90 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm shadow-lg pointer-events-none mb-2">{app.name}</div>
                 <button onClick={() => openApp(app.id)} className={`${app.color} w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-200 ease-out transform hover:scale-110 hover:-translate-y-2 active:scale-95 active:translate-y-0 ring-1 ring-white/20`}>{app.icon}</button>
                 <div className={`w-1 h-1 rounded-full bg-gray-800 mt-2 transition-all duration-300 ${isRunning ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;