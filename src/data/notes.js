export const notes = [
  {
    id: "introduction",
    title: "Introduction to Computers",
    content: `
      <h3>What is a Computer?</h3>
      <ul>
        <li>Electronic device that runs on electricity</li>
        <li>One-stop solution for various tasks (calculations, shopping, etc.)</li>
        <li>Components divided into two types:
          <ul>
            <li>Hardware: Physical components you can touch (keyboard, screen, etc.)</li>
            <li>Software: Components you cannot touch that control how computer works</li>
          </ul>
        </li>
      </ul>

      <h3>Computer System Components</h3>
      <ul>
        <li>CPU (Central Processing Unit): Brain of the computer</li>
        <li>Memory: Temporary storage for data being processed</li>
        <li>Input Devices: For entering data (keyboard, mouse)</li>
        <li>Output Devices: For displaying results (monitor, printer)</li>
        <li>Storage Devices: For permanent data storage</li>
      </ul>
    `
  },
  {
    id: "history",
    title: "History of Computers",
    content: `
      <h3>Timeline of Computer Evolution</h3>
      <ul>
        <li>Abacus: First calculating device</li>
        <li>1642: Blaise Pascal - First digital mechanical computer</li>
        <li>1833: Charles Babbage - Father of Computer</li>
        <li>1942: ENIAC - First high-speed electronic computer</li>
        <li>1950: Magnetic memory introduced</li>
        <li>1980: Semiconductor chips introduced</li>
      </ul>

      <h3>Important Facts</h3>
      <ul>
        <li>First program by Ada Lovelace</li>
        <li>Computer Literacy Day: December 2nd</li>
        <li>First Indian computer: Siddhartha</li>
      </ul>
    `
  },
  {
    id: "generations",
    title: "Computer Generations",
    content: `
      <h3>First Generation (1942-1952)</h3>
      <ul>
        <li>Vacuum tubes • Large size • ENIAC</li>
      </ul>

      <h3>Second Generation (1952-1964)</h3>
      <ul>
        <li>Transistors • Smaller • IBM 700</li>
      </ul>

      <h3>Third Generation (1964-1971)</h3>
      <ul>
        <li>Integrated circuits • IBM 360</li>
      </ul>

      <h3>Fourth Generation (1971-Present)</h3>
      <ul>
        <li>Microprocessors • Personal Computers</li>
      </ul>

      <h3>Fifth Generation (Present-Future)</h3>
      <ul>
        <li>AI • Optical fibers</li>
      </ul>
    `
  },
  {
    id: "types",
    title: "Types of Computers",
    content: `
      <h3>Based on Data Handling</h3>
      <ul>
        <li>Analog: Speedometer</li>
        <li>Digital: Laptop</li>
        <li>Hybrid: Petrol pump</li>
      </ul>

      <h3>Based on Size</h3>
      <ul>
        <li>Micro → Mini → Mainframe → Supercomputer</li>
      </ul>
    `
  },
  {
    id: "organization",
    title: "Computer Organization",
    content: `
      <h3>Basic Units</h3>
      <ol>
        <li>CPU (Central Processing Unit)</li>
        <li>Memory Unit</li>
        <li>Input/Output Unit</li>
      </ol>

      <h3>CPU Components</h3>
      <ol>
        <li>Registers: Local memory (limited size)</li>
        <li>ALU (Arithmetic Logic Unit): Performs calculations</li>
        <li>Control Unit: Controls operations and instruction execution</li>
      </ol>

      <h3>Data Flow Process</h3>
      <ol>
        <li>Input → Memory → CPU Processing → Memory → Output</li>
      </ol>
    `
  },
  {
    id: "input-devices",
    title: "Input Devices",
    content: `
      <h3>Common Input Devices</h3>
      <ul>
        <li>Keyboard: 104 keys in standard keyboard
          <ul>
            <li>Alphabet keys, Number keys, Function keys (F1-F12)</li>
            <li>Modifier keys (Ctrl, Alt, Shift)</li>
            <li>Toggle keys (Caps Lock, Num Lock, Scroll Lock)</li>
          </ul>
        </li>
        <li>Mouse Types:
          <ul>
            <li>Mechanical mouse (with rubber ball)</li>
            <li>Optical mouse (with light sensor)</li>
          </ul>
        </li>
        <li>Other Input Devices:
          <ul>
            <li>Trackball</li>
            <li>Light Pen (for CRT monitors)</li>
            <li>Stylus Pen (for graphic tablets)</li>
            <li>Scanner (Flatbed, Sheet-fed, Hand-held)</li>
            <li>Joystick (for gaming)</li>
            <li>Touchpad (in laptops)</li>
            <li>Microphone</li>
            <li>OMR (Optical Mark Reader)</li>
            <li>MICR (Magnetic Ink Character Reader)</li>
            <li>Barcode Scanner</li>
            <li>QR Code Scanner</li>
          </ul>
        </li>
      </ul>
    `
  },
  {
    id: "output-devices",
    title: "Output Devices",
    content: `
      <h3>Monitor Types</h3>
      <ul>
        <li>CRT (Cathode Ray Tube)</li>
        <li>TFT (Thin Film Transistor)</li>
        <li>LCD (Liquid Crystal Display)</li>
        <li>LED (Light Emitting Diode)</li>
      </ul>

      <h3>Color Classification</h3>
      <ul>
        <li>Monochrome (Black & White)</li>
        <li>Color Monitors</li>
      </ul>

      <h3>Printers</h3>
      <p>Impact Printers (Direct contact with paper)</p>
      <ul>
        <li>Uses hammer and ribbon</li>
        <li>Examples: Daisy Wheel, Dot Matrix, Line Printers</li>
        <li>Character Printers: Print one character at a time</li>
        <li>Line Printers: Print one line at a time</li>
      </ul>
      <p>Non-Impact Printers (No direct contact)</p>
      <ul>
        <li>Examples: Inkjet, Laser, Thermal</li>
        <li>Character Printers: Inkjet</li>
        <li>Page Printers: Laser</li>
      </ul>

      <h3>Popular Printer Types</h3>
      <ol>
        <li>Dot Matrix Printer
          <ul>
            <li>Impact, character printer</li>
            <li>Prints with dots</li>
            <li>Speed: 200-540 characters/second</li>
            <li>Medium price</li>
          </ul>
        </li>
        <li>Inkjet Printer
          <ul>
            <li>Non-impact, character printer</li>
            <li>Sprays ink</li>
            <li>Speed: 8 pages/minute</li>
            <li>Medium price</li>
          </ul>
        </li>
        <li>Laser Printer
          <ul>
            <li>Non-impact, page printer</li>
            <li>Prints entire page</li>
            <li>Speed: 20 pages/minute</li>
            <li>Expensive</li>
          </ul>
        </li>
      </ol>

      <h3>Other Output Devices</h3>
      <ul>
        <li>Plotter: For high-quality drawings (CAD applications)</li>
        <li>Produces large banners, engineering drawings</li>
      </ul>
    `
  },
  {
    id: "memory",
    title: "Computer Memory",
    content: `
      <h3>Types of Memory</h3>
      <ol>
        <li>Cache Memory
          <ul>
            <li>High-speed semiconductor memory</li>
            <li>Buffer between CPU and main memory</li>
            <li>Stores frequently used instructions</li>
            <li>Very fast, expensive, temporary</li>
          </ul>
        </li>
        <li>Primary/Main Memory
          <ul>
            <li>Volatile (data lost when power off)</li>
            <li>Faster than secondary memory</li>
            <li>Limited capacity</li>
            <li>Types:
              <ul>
                <li>RAM (Random Access Memory)
                  <ul>
                    <li>Read and write memory</li>
                    <li>CPU can change contents</li>
                    <li>Types: Static RAM, Dynamic RAM</li>
                  </ul>
                </li>
                <li>ROM (Read Only Memory)
                  <ul>
                    <li>Permanent memory</li>
                    <li>Types: PROM, EPROM, EEPROM</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Secondary Memory
          <ul>
            <li>Non-volatile, external</li>
            <li>Examples: Magnetic disks, CD, DVD, Pen drive</li>
            <li>Also called auxiliary memory</li>
          </ul>
        </li>
      </ol>

      <h3>Memory Units</h3>
      <p>Basic Units</p>
      <ul>
        <li>Bit: Smallest unit (0 or 1)</li>
        <li>Nibble: 4 bits</li>
        <li>Byte: 8 bits</li>
        <li>Word: Group of bits forming a unit</li>
      </ul>
      <p>Larger Units</p>
      <ul>
        <li>Kilobyte (KB): 1024 bytes</li>
        <li>Megabyte (MB): 1024 KB</li>
        <li>Gigabyte (GB): 1024 MB</li>
        <li>Terabyte (TB): 1024 GB</li>
        <li>Petabyte, Brontobyte, Geopbyte</li>
      </ul>
    `
  },
  {
    id: "number-systems",
    title: "Number Systems & Data Representation",
    content: `
      <h3>1. Introduction to Data Representation</h3>
      <ul>
        <li>Computers understand data in their own language, which is different from human language.</li>
        <li>A fundamental concept is the Binary Number System (using 0s and 1s).</li>
        <li>This topic is frequently asked in exams.</li>
      </ul>

      <h3>2. What is a Number System?</h3>
      <ul>
        <li>A technique to represent numbers.</li>
        <li>Defines the set of values used to represent quantity and the rules for representing numbers in a computer's architecture.</li>
      </ul>

      <h3>3. Types of Number Systems</h3>
      <p>There are four main types:</p>
      <table class="comparison-table">
        <tr>
          <th>Number System</th>
          <th>Base</th>
          <th>Digits Used</th>
          <th>Also Known As</th>
          <th>Example</th>
        </tr>
        <tr>
          <td>Binary</td>
          <td>2</td>
          <td>0, 1</td>
          <td>Base-2 System</td>
          <td>1011₂</td>
        </tr>
        <tr>
          <td>Decimal</td>
          <td>10</td>
          <td>0-9</td>
          <td>Base-10 System</td>
          <td>1275₁₀</td>
        </tr>
        <tr>
          <td>Octal</td>
          <td>8</td>
          <td>0-7</td>
          <td>Base-8 System</td>
          <td>234₈</td>
        </tr>
        <tr>
          <td>Hexadecimal</td>
          <td>16</td>
          <td>0-9, A-F</td>
          <td>Base-16 System</td>
          <td>FD9₁₆</td>
        </tr>
      </table>
    `
  },
  {
    id: "languages",
    title: "Computer Languages",
    content: `
      <h3>Generations of Languages</h3>
      <ol>
        <li>First Generation: Machine Language (0s and 1s)</li>
        <li>Second Generation: Assembly Language (Symbolic programming)</li>
        <li>Third Generation: High-level Languages (Fortran, Basic, Pascal)</li>
        <li>Fourth Generation: Query Languages (SQL)</li>
        <li>Fifth Generation: Artificial Intelligence Languages (Prolog, OPS5, Mercury)</li>
      </ol>
    `
  },
  {
    id: "software-os",
    title: "Computer Software & Operating Systems",
    content: `
      <h3>Software Fundamentals</h3>
      <p>Basic Definitions</p>
      <ul>
        <li>Data: Raw information without any modification</li>
        <li>Information: Processed data that is meaningful and understandable to computer</li>
        <li>Programs: Collection of instructions and commands that computer performs</li>
        <li>Software: Collection of programs that perform specific tasks</li>
      </ul>

      <h3>Types of Software</h3>
      <ol>
        <li>System Software
          <ul>
            <li>Helps computer system operate</li>
            <li>Provides basic functionality to operate computer by interacting directly with hardware</li>
            <li>Examples: Operating System, Drivers, BIOS (Basic Input Output System)</li>
          </ul>
        </li>
        <li>Application Software
          <ul>
            <li>Designed for performing one specific program/function</li>
            <li>Examples:
              <ul>
                <li>Word processing: MS Word</li>
                <li>Presentations: PowerPoint</li>
                <li>Spreadsheets: Excel</li>
                <li>Web browsers: Google Chrome, Mozilla Firefox</li>
                <li>Multimedia: Adobe Photoshop, VLC Media Player</li>
                <li>Email: Microsoft Outlook</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Programming Languages
          <ul>
            <li>Languages in which computer programs are written</li>
            <li>Have specific grammar called "syntax"</li>
          </ul>
        </li>
      </ol>

      <h3>Software Categories Based on Availability</h3>
      <ol>
        <li>Free and Open Source Software
          <ul>
            <li>Freely available with source code</li>
            <li>Can be modified and improved</li>
            <li>Examples: Ubuntu, Mozilla Firefox, LibreOffice</li>
          </ul>
        </li>
        <li>Freeware
          <ul>
            <li>Freely available but cannot modify source code</li>
            <li>Examples: Skype, Adobe Reader</li>
          </ul>
        </li>
        <li>Proprietary Software
          <ul>
            <li>Must be purchased from vendor who holds copyright</li>
            <li>Examples: Tally, Quick Heal, Microsoft Windows</li>
          </ul>
        </li>
        <li>Firmware
          <ul>
            <li>Permanent software installed during manufacturing</li>
            <li>Cannot be changed</li>
            <li>Examples: BIOS</li>
          </ul>
        </li>
      </ol>

      <h3>Computer Languages</h3>
      <h4>Types of Computer Languages</h4>
      <ol>
        <li>Low-Level Languages
          <ul>
            <li>Machine dependent</li>
            <li>Machine Language: First generation (0s and 1s)</li>
            <li>Assembly Language: Second generation (symbolic programming)</li>
          </ul>
        </li>
        <li>High-Level Languages
          <ul>
            <li>Machine independent</li>
            <li>Easy to write code</li>
            <li>Examples: C++, Java, Python</li>
            <li>Require translators to convert to machine language</li>
          </ul>
        </li>
      </ol>

      <h4>Translators</h4>
      <ol>
        <li>Assembler
          <ul>
            <li>Converts Assembly Language to Machine Language</li>
          </ul>
        </li>
        <li>Compiler
          <ul>
            <li>Converts entire High-Level Language program to Machine Language at once</li>
          </ul>
        </li>
        <li>Interpreter
          <ul>
            <li>Converts High-Level Language to Machine Language line by line</li>
          </ul>
        </li>
      </ol>

      <h4>Important Terms</h4>
      <ul>
        <li>Source Code: Program written in Assembly or High-Level Language</li>
      </ul>

      <h3>Operating Systems</h3>
      <p>What is an Operating System?</p>
      <ul>
        <li>Resource manager that knows computer's resources and how to manage them properly</li>
        <li>Examples: Windows, Linux, Mac OS</li>
      </ul>

      <h4>Functions of Operating System</h4>
      <ul>
        <li>Process Management</li>
        <li>Messaging Service</li>
        <li>Device Management</li>
        <li>Error Detection</li>
        <li>Memory Management</li>
        <li>Security</li>
        <li>File Management</li>
        <li>Command Interpretation</li>
      </ul>

      <h4>User Interfaces</h4>
      <ol>
        <li>Command-Based Interface
          <ul>
            <li>User gives commands through keyboard</li>
            <li>Examples: DOS, Unix</li>
          </ul>
        </li>
        <li>Graphical User Interface (GUI)
          <ul>
            <li>Programs and instructions visible as icons and menus</li>
            <li>Input devices: Mouse and Keyboard</li>
            <li>Examples: Windows, Ubuntu, Mac OS</li>
          </ul>
        </li>
        <li>Touch Interface
          <ul>
            <li>For touchscreen devices</li>
            <li>Examples: Android, iOS, Windows 8.1/10</li>
          </ul>
        </li>
        <li>Voice-Based Interface
          <ul>
            <li>Verbal commands</li>
            <li>Examples: iOS (Siri), Android (OK Google), Windows (Cortana)</li>
          </ul>
        </li>
      </ol>

      <h4>Popular Operating Systems Release Dates</h4>
      <ul>
        <li>Unix: 1969</li>
        <li>DOS: 1981</li>
        <li>Windows: 1985</li>
        <li>Mac OS: 1984 (Classic version)</li>
        <li>BlackBerry: 1999</li>
        <li>iOS: 2007</li>
        <li>Android: 2008</li>
        <li>Chrome OS: 2011</li>
        <li>Windows Phone: 2010</li>
      </ul>

      <h4>Specific Operating System Details</h4>
      <p>Mac OS</p>
      <ul>
        <li>Full form: Macintosh Operating System</li>
        <li>First version: Classic Mac OS (1984)</li>
        <li>Web browser: Safari</li>
        <li>Voice assistant: Siri</li>
      </ul>
      <p>Android</p>
      <ul>
        <li>Associated with Google</li>
        <li>Open source operating system</li>
      </ul>
      <p>Linux</p>
      <ul>
        <li>Most used operating system</li>
        <li>Open source</li>
        <li>Highly secure</li>
      </ul>
      <p>Unix</p>
      <ul>
        <li>Old name: UNICS (Uniplex Information and Computing System)</li>
        <li>Current name: UNIX</li>
        <li>Examples: Microsoft, Solaris</li>
      </ul>

      <h4>Types of Operating Systems</h4>
      <ol>
        <li>Batch Operating System
          <ul>
            <li>Groups similar jobs together in batches</li>
            <li>Processes one batch completely before starting next</li>
            <li>Used in: Payroll systems, Banking systems</li>
            <li>Multiple users but no direct communication</li>
          </ul>
        </li>
        <li>Real-Time Operating System
          <ul>
            <li>Used for real-time applications where quick response needed</li>
            <li>Processing time is small</li>
            <li>Types:
              <ul>
                <li>Soft Real-Time: Camera, Mobile phones</li>
                <li>Hard Real-Time: Airbag control, Anti-lock brake system</li>
              </ul>
            </li>
            <li>Used in: Traffic control systems, Autonomous driving systems</li>
          </ul>
        </li>
        <li>Time-Sharing and Multi-Tasking OS
          <ul>
            <li>Multiple tasks performed simultaneously</li>
            <li>Minimizes response time</li>
            <li>Examples: Unix, Windows, Linux</li>
          </ul>
        </li>
        <li>Multi-Programming OS
          <ul>
            <li>Multiple jobs loaded into memory ready for execution</li>
            <li>CPU never idle</li>
            <li>Processes jobs one after another</li>
          </ul>
        </li>
        <li>Multi-Processing OS
          <ul>
            <li>Multiple CPUs in single computer system</li>
            <li>Increases system output</li>
            <li>Can open files not present in one system but available in connected devices</li>
            <li>Also called Distributed Operating System</li>
            <li>Failure of one system doesn't affect others</li>
          </ul>
        </li>
        <li>Embedded Operating System
          <ul>
            <li>Built into larger systems</li>
            <li>Performs one specific function</li>
            <li>Example: ATM (cash withdrawal/deposit)</li>
          </ul>
        </li>
        <li>Network Operating System
          <ul>
            <li>One server connected to multiple clients</li>
            <li>File management, data processing, file sharing over network</li>
            <li>Multiple users can connect</li>
            <li>Secure system</li>
          </ul>
        </li>
        <li>Mobile Operating System
          <ul>
            <li>Designed for small devices like smartphones</li>
            <li>Efficient operation</li>
          </ul>
        </li>
      </ol>
    `
  },
  {
    id: "ports",
    title: "Computer Ports",
    content: `
      <h3>Types of Ports</h3>
      <ol>
        <li>Serial Port
          <ul>
            <li>Used for modem, old mouse</li>
            <li>9-pin or 25-pin versions</li>
            <li>Speed: 150 kilobits/second</li>
            <li>Data travels one way</li>
          </ul>
        </li>
        <li>Parallel Port
          <ul>
            <li>Used for scanner, printer</li>
            <li>25-pin version</li>
            <li>Multiple data streams simultaneously</li>
          </ul>
        </li>
        <li>USB (Universal Serial Bus)
          <ul>
            <li>Universal port for modern devices</li>
            <li>Connects printer, scanner, mouse, keyboard</li>
          </ul>
        </li>
        <li>FireWire Port
          <ul>
            <li>For high-speed data transfer</li>
            <li>Used in cameras, video equipment</li>
            <li>Speed: 400-800 MB/second</li>
          </ul>
        </li>
        <li>Ethernet Port
          <ul>
            <li>For network and internet connection</li>
          </ul>
        </li>
      </ol>
    `
  },
  {
    id: "shortcuts",
    title: "Keyboard Shortcuts",
    content: `
      <h3>Common Shortcuts</h3>
      <table class="comparison-table">
        <tr>
          <th>Shortcut</th>
          <th>Function</th>
        </tr>
        <tr>
          <td>Ctrl + A</td>
          <td>Select all</td>
        </tr>
        <tr>
          <td>Ctrl + B</td>
          <td>Bold</td>
        </tr>
        <tr>
          <td>Ctrl + C</td>
          <td>Copy</td>
        </tr>
        <tr>
          <td>Ctrl + I</td>
          <td>Italic</td>
        </tr>
        <tr>
          <td>Ctrl + U</td>
          <td>Underline</td>
        </tr>
        <tr>
          <td>Ctrl + N</td>
          <td>New document</td>
        </tr>
        <tr>
          <td>Ctrl + O</td>
          <td>Open document</td>
        </tr>
        <tr>
          <td>Ctrl + S</td>
          <td>Save</td>
        </tr>
        <tr>
          <td>Ctrl + P</td>
          <td>Print</td>
        </tr>
        <tr>
          <td>Ctrl + Z</td>
          <td>Undo</td>
        </tr>
        <tr>
          <td>Ctrl + Y</td>
          <td>Redo</td>
        </tr>
        <tr>
          <td>Ctrl + X</td>
          <td>Cut</td>
        </tr>
        <tr>
          <td>Ctrl + V</td>
          <td>Paste</td>
        </tr>
        <tr>
          <td>Ctrl + K</td>
          <td>Hyperlink</td>
        </tr>
        <tr>
          <td>Ctrl + Home</td>
          <td>Go to beginning</td>
        </tr>
        <tr>
          <td>Ctrl + End</td>
          <td>Go to end</td>
        </tr>
        <tr>
          <td>F7</td>
          <td>Spell check</td>
        </tr>
        <tr>
          <td>F12</td>
          <td>Save as</td>
        </tr>
        <tr>
          <td>Alt + F4</td>
          <td>Close program</td>
        </tr>
      </table>
    `
  },
  {
    id: "viruses",
    title: "Computer Viruses & Malware",
    content: `
      <h3>What is a Computer Virus?</h3>
      <p>A self-replicating malicious program that spreads by inserting copies of itself into other files or systems.</p>
      <p><strong>VIRUS:</strong> Vital Information Resources Under Siege</p>
      <p><strong>First Virus:</strong> Brain (1986)</p>

      <h3>All Types of Viruses & Malware</h3>
      <table class="comparison-table">
        <tr>
          <th>Type</th>
          <th>Description</th>
          <th>Examples</th>
        </tr>
        <tr>
          <td>Boot Sector</td>
          <td>Infects boot record</td>
          <td>Brain, Stone</td>
        </tr>
        <tr>
          <td>File Infector</td>
          <td>Attaches to .exe files</td>
          <td>Cascade, Jerusalem</td>
        </tr>
        <tr>
          <td>Macro Virus</td>
          <td>Uses Word/Excel macros</td>
          <td>Melissa</td>
        </tr>
        <tr>
          <td>Polymorphic</td>
          <td>Changes signature</td>
          <td>Storm Worm</td>
        </tr>
        <tr>
          <td>Metamorphic</td>
          <td>Rewrites entire code</td>
          <td>Zmist</td>
        </tr>
        <tr>
          <td>Stealth</td>
          <td>Hides from antivirus</td>
          <td>Brain, Whale</td>
        </tr>
        <tr>
          <td>Trojan</td>
          <td>Pretends to be useful</td>
          <td>Zeus, Beast</td>
        </tr>
        <tr>
          <td>Worm</td>
          <td>Spreads via network</td>
          <td>ILOVEYOU, WannaCry</td>
        </tr>
        <tr>
          <td>Ransomware</td>
          <td>Encrypts files</td>
          <td>WannaCry, Locky</td>
        </tr>
      </table>

      <div class="highlight">
        <strong>Prevention:</strong><br>
        • Updated antivirus<br>
        • Scan pendrives<br>
        • Avoid unknown attachments<br>
        • No pirated software
      </div>
    `
  },
  {
    id: "internet",
    title: "Internet & Computer Fundamentals",
    content: `
      <h3>1. What is Internet?</h3>
      <ul>
        <li>A global system of interconnected computer networks.</li>
        <li>Millions of private, public, academic, business, and government networks are linked together.</li>
        <li>Uses TCP/IP protocol suite for communication.</li>
        <li>No single owner — decentralized network.</li>
        <li>Often called "Network of Networks".</li>
      </ul>

      <h3>2. ISP (Internet Service Provider)</h3>
      <ul>
        <li>Companies that provide internet access to users.</li>
        <li>Examples: Airtel, Jio, BSNL, Vodafone-Idea, ACT Fibernet, etc.</li>
        <li>Types: Dial-up, Broadband, Fiber, Mobile Data (3G/4G/5G), Wi-Fi, etc.</li>
      </ul>

      <h3>3. History of Internet</h3>
      <table class="comparison-table">
        <tr>
          <th>Year</th>
          <th>Event</th>
        </tr>
        <tr>
          <td>1969</td>
          <td>ARPANET (first network) launched by U.S. Department of Defense</td>
        </tr>
        <tr>
          <td>1971</td>
          <td>First email sent by Ray Tomlinson</td>
        </tr>
        <tr>
          <td>1983</td>
          <td>TCP/IP became standard protocol (official birth of Internet)</td>
        </tr>
        <tr>
          <td>1989</td>
          <td>World Wide Web (WWW) proposed by Tim Berners-Lee</td>
        </tr>
        <tr>
          <td>1990-91</td>
          <td>First web browser (WorldWideWeb, later Nexus) & WWW released</td>
        </tr>
        <tr>
          <td>1993</td>
          <td>Mosaic browser (first graphical browser with images)</td>
        </tr>
        <tr>
          <td>1995</td>
          <td>Internet launched commercially in India (by VSNL, now Tata Communications)</td>
        </tr>
      </table>

      <h3>4. Key Internet Protocols (Must Remember Full Forms)</h3>
      <table class="comparison-table">
        <tr>
          <th>Protocol</th>
          <th>Full Form</th>
          <th>Purpose</th>
        </tr>
        <tr>
          <td>TCP/IP</td>
          <td>Transmission Control Protocol / Internet Protocol</td>
          <td>Core protocols for internet communication</td>
        </tr>
        <tr>
          <td>HTTP</td>
          <td>HyperText Transfer Protocol</td>
          <td>Transfer web pages</td>
        </tr>
        <tr>
          <td>HTTPS</td>
          <td>HyperText Transfer Protocol Secure</td>
          <td>Secure version of HTTP (encrypted)</td>
        </tr>
        <tr>
          <td>FTP</td>
          <td>File Transfer Protocol</td>
          <td>Upload/download files</td>
        </tr>
        <tr>
          <td>SMTP</td>
          <td>Simple Mail Transfer Protocol</td>
          <td>Sending emails</td>
        </tr>
        <tr>
          <td>POP3</td>
          <td>Post Office Protocol version 3</td>
          <td>Receiving & downloading emails (deletes from server)</td>
        </tr>
        <tr>
          <td>IMAP</td>
          <td>Internet Message Access Protocol</td>
          <td>Receiving emails (keeps on server, sync across devices)</td>
        </tr>
        <tr>
          <td>DNS</td>
          <td>Domain Name System</td>
          <td>Converts domain names (google.com) → IP addresses</td>
        </tr>
      </table>

      <h3>5. Types of Domain Names</h3>
      <table class="comparison-table">
        <tr>
          <th>Type</th>
          <th>Extension</th>
          <th>Meaning</th>
        </tr>
        <tr>
          <td>Top-Level Domain (TLD)</td>
          <td>.com, .org, .net, .edu, .gov, .mil, .info</td>
          <td>Generic or country-specific</td>
        </tr>
        <tr>
          <td>Country-Code TLD</td>
          <td>.in (India), .us, .uk, .au</td>
          <td>Country-specific</td>
        </tr>
        <tr>
          <td>Common TLDs</td>
          <td>.com → Commercial<br>.org → Organization<br>.net → Network<br>.edu → Education<br>.gov → Government<br>.mil → Military</td>
          <td></td>
        </tr>
      </table>

      <h3>6. URL (Uniform Resource Locator)</h3>
      <ul>
        <li>Full Form: Uniform Resource Locator</li>
        <li>Unique address of any resource on the internet.</li>
        <li>Example: https://www.rblearning.com/support/contact.html</li>
        <li>Parts of URL:
          <ol>
            <li>Protocol → https://</li>
            <li>Domain/Host → www.rblearning.com</li>
            <li>Path/Folder → /support/</li>
            <li>File name → contact.html</li>
          </ol>
        </li>
      </ul>

      <h3>7. Web Page vs Website vs WWW</h3>
      <ul>
        <li>Web Page → Single page (written in HTML)</li>
        <li>Website → Collection of related web pages</li>
        <li>WWW (World Wide Web) → System of interlinked hypertext documents accessed via Internet</li>
        <li>Invented by: Tim Berners-Lee in 1989 at CERN</li>
      </ul>

      <h3>8. HTML</h3>
      <ul>
        <li>Full Form: HyperText Markup Language</li>
        <li>Language used to create web pages</li>
      </ul>

      <h3>9. Web Browsers (Examples)</h3>
      <ul>
        <li>Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Opera</li>
        <li>First Graphical Browser: Mosaic (1993)</li>
        <li>First Browser to show images inline: Mosaic</li>
        <li>Mozilla Firefox → Open source & free</li>
      </ul>

      <h3>10. Search Engines</h3>
      <ul>
        <li>Software that searches the internet and shows results.</li>
        <li>Examples: Google, Bing, Yahoo, DuckDuckGo</li>
        <li>First Search Engine: Archie (1990)</li>
      </ul>

      <h3>11. Modem vs Router</h3>
      <table class="comparison-table">
        <tr>
          <th>Device</th>
          <th>Function</th>
        </tr>
        <tr>
          <td>Modem</td>
          <td>Converts digital signal ↔ analog signal (connects home to ISP)</td>
        </tr>
        <tr>
          <td>Router</td>
          <td>Connects multiple devices, creates local network, distributes internet (Wi-Fi)</td>
        </tr>
        <tr>
          <td>Modern Devices</td>
          <td>Most home devices are Modem + Router combined</td>
        </tr>
      </table>

      <h3>12. Download vs Upload</h3>
      <ul>
        <li>Download → From internet to your device</li>
        <li>Upload → From your device to internet</li>
      </ul>

      <h3>13. Email (Electronic Mail)</h3>
      <ul>
        <li>Structure of Email ID: username@domain.com (e.g., example@gmail.com)</li>
        <li>Important Email Terms:
          <ul>
            <li>To → Main recipient</li>
            <li>Cc → Carbon Copy (visible to all)</li>
            <li>Bcc → Blind Carbon Copy (hidden from others)</li>
            <li>Attachment → Files sent with email</li>
            <li>Inbox, Sent, Draft, Trash, Spam, Archive</li>
            <li>Compose → To write new email</li>
            <li>Reply → Answer to sender only</li>
            <li>Reply All → Answer to sender + all recipients</li>
            <li>Forward → Send received email to someone else</li>
          </ul>
        </li>
      </ul>

      <h3>14. Online Banking & Payment Systems (India)</h3>
      <table class="comparison-table">
        <tr>
          <th>System</th>
          <th>Full Form</th>
          <th>Key Feature</th>
        </tr>
        <tr>
          <td>NEFT</td>
          <td>National Electronic Funds Transfer</td>
          <td>Works in batches (every 30 min), no minimum, max ₹ no limit</td>
        </tr>
        <tr>
          <td>RTGS</td>
          <td>Real Time Gross Settlement</td>
          <td>Real-time, minimum ₹2 lakh</td>
        </tr>
        <tr>
          <td>IMPS</td>
          <td>Immediate Payment Service</td>
          <td>24×7 instant transfer (via mobile/app)</td>
        </tr>
        <tr>
          <td>UPI</td>
          <td>Unified Payments Interface</td>
          <td>Instant using Virtual Payment Address (e.g., name@upi)</td>
        </tr>
        <tr>
          <td>ECS</td>
          <td>Electronic Clearing Service</td>
          <td>For bulk payments (salary, pension, bills)</td>
        </tr>
      </table>

      <h3>15. Important Keyboard Shortcuts (Common in Exams)</h3>
      <table class="comparison-table">
        <tr>
          <th>Shortcut</th>
          <th>Function</th>
        </tr>
        <tr>
          <td>F5 or Ctrl+R</td>
          <td>Refresh webpage</td>
        </tr>
        <tr>
          <td>Ctrl + D</td>
          <td>Bookmark current page</td>
        </tr>
        <tr>
          <td>Ctrl + T</td>
          <td>New tab</td>
        </tr>
        <tr>
          <td>Ctrl + N</td>
          <td>New browser window</td>
        </tr>
        <tr>
          <td>Ctrl + Shift + T</td>
          <td>Reopen closed tab</td>
        </tr>
      </table>

      <h3>16. Quick Revision One-Liners</h3>
      <ul>
        <li>Slowest internet connection → Dial-up</li>
        <li>First web browser with images → Mosaic</li>
        <li>Microsoft's browser → Edge (earlier Internet Explorer)</li>
        <li>Open source browser → Mozilla Firefox</li>
        <li>Inventor of WWW → Tim Berners-Lee</li>
        <li>Internet came to India → 15 August 1995 (VSNL)</li>
      </ul>
    `
  },
  {
    id: "osi-model",
    title: "OSI Model Notes",
    content: `
      <h3>Introduction to OSI Model</h3>
      <ul>
        <li>Purpose: The OSI (Open Systems Interconnection) Model is a framework that enables communication between two different devices, even if they have varying hardware and software. It standardizes the process to overcome obstacles in direct communication.</li>
        <li>Key Benefit: No need to change hardware/software; just follow the 7 layers for seamless data exchange.</li>
        <li>Basic Logic: Helps in the data transmission process from one device to another.</li>
      </ul>

      <h3>The 7 Layers (Remember in Order: Bottom to Top)</h3>
      <p>Use the mnemonic: Please Do Not Throw Sausage Pizza Away (PDN TSPPA).</p>
      <ol>
        <li>Physical Layer (P)</li>
        <li>Data Link Layer (D)</li>
        <li>Network Layer (N)</li>
        <li>Transport Layer (T)</li>
        <li>Session Layer (S)</li>
        <li>Presentation Layer (P)</li>
        <li>Application Layer (A)</li>
      </ol>

      <h3>OSI Model Architecture and Data Flow</h3>
      <p>Example Scenario: Ojas sends "Baby I love you" via WhatsApp to Anushka.</p>
      <p>Sender Side (Encapsulation):</p>
      <ul>
        <li>Message starts at Application Layer → Processed layer by layer downward.</li>
        <li>Each layer adds its specific header/functionality to the message.</li>
        <li>Reaches Physical Layer → Converts to physical signals (e.g., electrical over Ethernet cable) → Transmitted via router to receiver's device.</li>
      </ul>
      <p>Transmission: Travels through physical medium (wired/wireless).</p>
      <p>Receiver Side (Decapsulation):</p>
      <ul>
        <li>Starts at Physical Layer → Converts signals back to bits/frames.</li>
        <li>Processed layer by layer upward → Reaches Application Layer → Message displayed to Anushka.</li>
      </ul>
      <p>Key Principles:</p>
      <ol>
        <li>Data passes through all 7 layers at sender (top-to-bottom) and receiver (bottom-to-top).</li>
        <li>Each layer performs a specific function on incoming data, then passes it to the next layer.</li>
        <li>Layers interact with both upper and lower adjacent layers (bidirectional communication possible, e.g., replies).</li>
      </ol>
      <p>Data Units Across Layers:</p>
      <ul>
        <li>Application → Segments (from Session).</li>
        <li>Transport → Segments.</li>
        <li>Network → Packets.</li>
        <li>Data Link → Frames.</li>
        <li>Physical → Bits/Signals.</li>
      </ul>

      <h3>Layer-wise Functionalities</h3>
      <h4>1. Application Layer (Top Layer; Also Called User/Desktop Layer)</h4>
      <ul>
        <li>Role: Provides an interface between the user/system and applications.</li>
        <li>Functions:
          <ul>
            <li>Enables interaction with apps (e.g., WhatsApp, Google Chrome).</li>
            <li>Handles protocols for sending messages/media (e.g., HTTPS for searches like "how to earn money cheaply").</li>
          </ul>
        </li>
        <li>Key Point: All application-specific protocols (e.g., HTTP/HTTPS) operate here.</li>
      </ul>

      <h4>2. Presentation Layer</h4>
      <ul>
        <li>Role: Prepares data for the application layer by handling formatting/security.</li>
        <li>Functions (Remember as EC² - Encryption, Compression, Conversion):
          <ul>
            <li>Conversion: Translates human-readable data (e.g., "Baby I love you") to machine-readable format (and vice versa at receiver).</li>
            <li>Encryption: Converts message to encrypted form (only sender/receiver can decrypt; e.g., end-to-end in WhatsApp). Performed only when needed.</li>
            <li>Compression: Reduces file size for media (e.g., images/videos) to save bandwidth.</li>
          </ul>
        </li>
        <li>Receiver Side: Performs opposites - Decryption, Decompression, Reverse Conversion.</li>
      </ul>

      <h4>3. Session Layer</h4>
      <ul>
        <li>Role: Manages communication sessions between devices.</li>
        <li>Functions (Two Main: Dialog Control & Token Management):
          <ul>
            <li>Dialog Control: Checks if server is free to receive message (e.g., Ojas sends WhatsApp message; if Anushka offline, routes to server). If server busy, queries another server.</li>
            <li>Token Management: Server grants a "token" (permission) if free, allowing message receipt.</li>
          </ul>
        </li>
        <li>Key Point: First three layers (Application, Presentation, Session) are the responsibility of the specific application (e.g., WhatsApp handles them).</li>
      </ul>

      <h4>4. Transport Layer</h4>
      <ul>
        <li>Role: Ensures reliable end-to-end data delivery.</li>
        <li>Functions (Three Main: Segmentation, Flow Control, Error Control):
          <ul>
            <li>Segmentation: Divides incoming data into smaller units (segments). Each segment includes:
              <ul>
                <li>Sequence Number (for reordering at receiver).</li>
                <li>Source/Destination Port Numbers (to identify target application).</li>
              </ul>
            </li>
            <li>Flow Control: Matches sender/receiver speeds (e.g., slows server from 50 Mbps to 10 Mbps if receiver can't process faster; or speeds up slow sender).</li>
            <li>Error Control: Detects lost/corrupted data via automatic retransmission schemes (re-requests missing segments).</li>
          </ul>
        </li>
        <li>Key Point: Ensures data arrives in correct order and intact.</li>
      </ul>

      <h4>5. Network Layer</h4>
      <ul>
        <li>Role: Handles routing and addressing across networks.</li>
        <li>Functions (Two Main: Logical Addressing & Path Determination):
          <ul>
            <li>Logical Addressing: Assigns IP addresses to sender/receiver on each segment, turning it into a packet. Ensures packet reaches correct destination.</li>
            <li>Path Determination: Finds the best route among multiple paths from source to destination.</li>
          </ul>
        </li>
        <li>Key Point: Operates on packets; IP is a key protocol here.</li>
      </ul>

      <h4>6. Data Link Layer</h4>
      <ul>
        <li>Role: Provides node-to-node data transfer over local media.</li>
        <li>Functions:
          <ul>
            <li>Physical Addressing: Adds sender/receiver MAC addresses to packets, turning them into frames. MAC Address: 12-digit alphanumeric code on Network Interface Card (NIC).</li>
          </ul>
        </li>
        <li>Key Point: Handles local delivery (e.g., over copper wire, fiber optic, or wireless). Software in NIC facilitates this.</li>
      </ul>

      <h4>7. Physical Layer (Bottom Layer)</h4>
      <ul>
        <li>Role: Deals with physical transmission of raw bits.</li>
        <li>Functions:
          <ul>
            <li>Converts frames (bits: 0s and 1s) to physical signals for transmission.</li>
            <li>Determines connection type:
              <ul>
                <li>Wired (Ethernet Cable): Converts to electrical signals.</li>
                <li>Wired (Fiber Optic): Converts to light signals.</li>
                <li>Wireless: Converts to radio waves.</li>
              </ul>
            </li>
            <li>Transmits signals over the medium.</li>
          </ul>
        </li>
        <li>Receiver Side: Converts signals back to frames/bits.</li>
        <li>Key Point: Hardware-focused; defines how devices physically connect.</li>
      </ul>

      <h3>Additional Notes</h3>
      <ul>
        <li>Overall Process Cycle: Bidirectional - After receiving, receiver can reply (e.g., Anushka sends "I love you too"), triggering the same layer functions in reverse direction.</li>
        <li>Exam Tip: Refer to detailed notes for most expected questions/answers in simple language.</li>
        <li>Mnemonic for Presentation Layer Functions: EC² (E=Encryption, C=Conversion, C=Compression).</li>
        <li>Responsibility Split: Upper 3 layers (App/Pres/Sess) = Application-specific; Lower 4 (Trans/Net/DL/Phys) = Network/OS-specific.</li>
      </ul>
      <p>These notes summarize the key explanations with examples for clarity. Focus on layer order and functions for exams!</p>

      <h3 style="text-align: center; margin: 60px 0 40px; font-size: 2.4rem; background: linear-gradient(90deg, #7c3aed, #4361ee, #10b981); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">🏆 The 7 Layers of OSI Model (Bottom → Top)</h3>
      <div class="osi-pyramid">
        <div class="osi-layer" data-layer="7">
          <span class="layer-num">7</span>
          <span class="layer-name">Application Layer</span>
          <span class="layer-short">(A)</span>
          <div class="layer-desc">User Interface • HTTP, FTP, SMTP</div>
        </div>
        <div class="osi-layer" data-layer="6">
          <span class="layer-num">6</span>
          <span class="layer-name">Presentation Layer</span>
          <span class="layer-short">(P)</span>
          <div class="layer-desc">Encryption • Compression • Translation</div>
        </div>
        <div class="osi-layer" data-layer="5">
          <span class="layer-num">5</span>
          <span class="layer-name">Session Layer</span>
          <span class="layer-short">(S)</span>
          <div class="layer-desc">Dialog Control • Session Management</div>
        </div>
        <div class="osi-layer" data-layer="4">
          <span class="layer-num">4</span>
          <span class="layer-name">Transport Layer</span>
          <span class="layer-short">(T)</span>
          <div class="layer-desc">End-to-End Delivery • TCP / UDP</div>
        </div>
        <div class="osi-layer" data-layer="3">
          <span class="layer-num">3</span>
          <span class="layer-name">Network Layer</span>
          <span class="layer-short">(N)</span>
          <div class="layer-desc">Routing • Logical Addressing (IP)</div>
        </div>
        <div class="osi-layer" data-layer="2">
          <span class="layer-num">2</span>
          <span class="layer-name">Data Link Layer</span>
          <span class="layer-short">(D)</span>
          <div class="layer-desc">Framing • MAC Address • Error Detection</div>
        </div>
        <div class="osi-layer" data-layer="1">
          <span class="layer-num">1</span>
          <span class="layer-name">Physical Layer</span>
          <span class="layer-short">(P)</span>
          <div class="layer-desc">Bits on Wire • Cables • Hubs • Signals</div>
        </div>
      </div>
    `
  },
  {
    id: "networking-devices",
    title: "Networking Devices – Super Crisp Revision Notes",
    content: `
      <h3>Device Comparison Table</h3>
      <table class="comparison-table">
        <tr>
          <th>Device</th>
          <th>OSI Layer</th>
          <th>Main Function (2-3 Lines)</th>
          <th>Key Points / Exam Tips</th>
        </tr>
        <tr>
          <td><strong>Router</strong></td>
          <td>Layer 3</td>
          <td>Directs data between different networks using IP addresses<br>Connects LAN to Internet/WAN<br>Performs NAT & basic firewall</td>
          <td>Most important device<br>Default Gateway of any network</td>
        </tr>
        <tr>
          <td><strong>Switch</strong></td>
          <td>Layer 2</td>
          <td>Connects devices inside same LAN<br>Forwards data using MAC address<br>Sends data only to destination device</td>
          <td>Reduces congestion<br>Replaced hubs</td>
        </tr>
        <tr>
          <td><strong>Hub</strong></td>
          <td>Layer 1</td>
          <td>Connects devices in LAN<br>Broadcasts data to ALL ports<br>No intelligence</td>
          <td>Obsolete → high collisions & slow</td>
        </tr>
        <tr>
          <td><strong>Modem</strong></td>
          <td>Layer 1</td>
          <td>Converts digital ↔ analog signals<br>Connects home network to ISP</td>
          <td>Often combined with router (modem-router combo)</td>
        </tr>
        <tr>
          <td><strong>Access Point (AP)</strong></td>
          <td>Layer 2</td>
          <td>Extends Wi-Fi coverage<br>Connected to router via cable<br>Creates stronger wireless zone</td>
          <td>Used in big homes/offices for better Wi-Fi range</td>
        </tr>
        <tr>
          <td><strong>Firewall</strong></td>
          <td>Layer 3-7</td>
          <td>Security barrier<br>Filters incoming/outgoing traffic based on rules</td>
          <td>Protects from threats<br>Hardware firewall sits at edge</td>
        </tr>
        <tr>
          <td><strong>NIC</strong></td>
          <td>Layer 1-2</td>
          <td>Network Interface Card (in every device)<br>Wired (Ethernet) or Wireless (Wi-Fi)</td>
          <td>Has unique MAC address</td>
        </tr>
        <tr>
          <td><strong>Repeater</strong></td>
          <td>Layer 1</td>
          <td>Amplifies weak signals<br>Extends cable/Wi-Fi range</td>
          <td>Just boosts signal, no new network</td>
        </tr>
        <tr>
          <td><strong>Bridge</strong></td>
          <td>Layer 2</td>
          <td>Connects two LAN segments<br>Filters traffic using MAC address</td>
          <td>Makes them act as one network<br>Less common now</td>
        </tr>
        <tr>
          <td><strong>Gateway</strong></td>
          <td>Layer 3+</td>
          <td>Entry/exit point of entire network<br>Connects different types of networks/protocols</td>
          <td>Same as router in most cases<br><strong>Most asked MCQ answer</strong></td>
        </tr>
        <tr>
          <td><strong>Load Balancer</strong></td>
          <td>Layer 4-7</td>
          <td>Distributes traffic across multiple servers<br>Prevents any server from overload</td>
          <td>Used in big websites/data centers</td>
        </tr>
      </table>

      <div class="key-point">
        <strong>Golden Exam Rule:</strong><br>
        Any data leaving or entering your local network <strong>MUST</strong> pass through the <strong>Gateway/Router</strong> → Answer is always <strong>Gateway</strong> when question says "entry and exit point".
      </div>

      <h3>Data Flow in Typical Home Network</h3>
      <p><strong>Your Phone/Laptop (Wi-Fi)</strong> → <strong>Access Point</strong> (in router) → <strong>Switch</strong> (inside router) → <strong>Router/Gateway</strong> → NAT & Routing → <strong>Modem</strong> → ISP → Internet</p>
      <p><strong>Incoming:</strong> Internet → Modem → Router/Gateway → Switch → Access Point → Your Device</p>

      <div class="highlight">
        <strong>Most Frequent SSC/Railway/Banking Questions:</strong><br>
        • Entry & exit point of a network? → <strong>Gateway</strong><br>
        • Connects two different networks? → <strong>Router/Gateway</strong><br>
        • Works only inside one LAN? → <strong>Switch</strong><br>
        • Broadcasts everything? → <strong>Hub</strong><br>
        • Your home Wi-Fi router = Router + Switch + Access Point (+ Modem)
      </div>
    `
  },
  {
    id: "abbreviations",
    title: "Important Abbreviations",
    content: `
      <h3>Software & Programming</h3>
      <table class="comparison-table">
        <tr>
          <th>Abbr</th>
          <th>Full Form</th>
        </tr>
        <tr>
          <td>HTTP</td>
          <td>Hyper Text Transfer Protocol</td>
        </tr>
        <tr>
          <td>SQL</td>
          <td>Structure Query Language (4th generation language)</td>
        </tr>
        <tr>
          <td>FORTRAN</td>
          <td>Formula Translation (2nd generation language)</td>
        </tr>
        <tr>
          <td>HTML</td>
          <td>Hyper Text Markup Language</td>
        </tr>
        <tr>
          <td>CAD</td>
          <td>Computer Aided Design</td>
        </tr>
        <tr>
          <td>CAM</td>
          <td>Computer Aided Manufacturing</td>
        </tr>
      </table>

      <h3>Hardware & Memory</h3>
      <table class="comparison-table">
        <tr>
          <th>Abbr</th>
          <th>Full Form</th>
        </tr>
        <tr>
          <td>ROM</td>
          <td>Read Only Memory</td>
        </tr>
        <tr>
          <td>RAM</td>
          <td>Random Access Memory</td>
        </tr>
        <tr>
          <td>BIOS</td>
          <td>Basic Input Output System</td>
        </tr>
        <tr>
          <td>MODEM</td>
          <td>Modulation Demodulation</td>
        </tr>
        <tr>
          <td>CPU</td>
          <td>Central Processing Unit</td>
        </tr>
        <tr>
          <td>LCD</td>
          <td>Liquid Crystal Display</td>
        </tr>
        <tr>
          <td>LED</td>
          <td>Light Emitting Diode</td>
        </tr>
        <tr>
          <td>CRT</td>
          <td>Cathode Ray Tube</td>
        </tr>
        <tr>
          <td>TFT</td>
          <td>Thin Film Transistor</td>
        </tr>
        <tr>
          <td>MIPS</td>
          <td>Million Instructions Per Second</td>
        </tr>
        <tr>
          <td>MOPS</td>
          <td>Millions Operations Per Second</td>
        </tr>
      </table>

      <h3>Storage & Devices</h3>
      <table class="comparison-table">
        <tr>
          <th>Abbr</th>
          <th>Full Form</th>
        </tr>
        <tr>
          <td>CD</td>
          <td>Compact Disk</td>
        </tr>
        <tr>
          <td>OMR</td>
          <td>Optical Mark Reader</td>
        </tr>
        <tr>
          <td>MICR</td>
          <td>Magnetic Ink Character Reader</td>
        </tr>
        <tr>
          <td>UPS</td>
          <td>Uninterruptible Power Supply</td>
        </tr>
        <tr>
          <td>DTH</td>
          <td>Desktop System</td>
        </tr>
      </table>

      <h3>Networking & Internet</h3>
      <table class="comparison-table">
        <tr>
          <th>Abbr</th>
          <th>Full Form</th>
        </tr>
        <tr>
          <td>WWW</td>
          <td>World Wide Web</td>
        </tr>
        <tr>
          <td>CCTV</td>
          <td>Closed Circuit Television</td>
        </tr>
        <tr>
          <td>ISP</td>
          <td>Internet Service Provider</td>
        </tr>
        <tr>
          <td>GPS</td>
          <td>Global Positioning System</td>
        </tr>
      </table>

      <h3>File Formats</h3>
      <table class="comparison-table">
        <tr>
          <th>Abbr</th>
          <th>Full Form</th>
        </tr>
        <tr>
          <td>JPEG</td>
          <td>Joint Photographic Expert Group</td>
        </tr>
        <tr>
          <td>GIF</td>
          <td>Graphic Interchangeable Format</td>
        </tr>
        <tr>
          <td>PNG</td>
          <td>Portable Network Graphic</td>
        </tr>
        <tr>
          <td>PDF</td>
          <td>Portable Document Format</td>
        </tr>
      </table>

      <h3>Companies & Systems</h3>
      <table class="comparison-table">
        <tr>
          <th>Abbr</th>
          <th>Full Form</th>
        </tr>
        <tr>
          <td>IBM</td>
          <td>International Business Machine</td>
        </tr>
        <tr>
          <td>ENIAC</td>
          <td>Electronic Numerical Integrator and Calculator</td>
        </tr>
      </table>
      <p>These notes cover software fundamentals, programming languages, operating systems, and important abbreviations for comprehensive computer knowledge.</p>
    `
  },
  {
    id: "ms-word",
    title: "Microsoft Word",
    content: `
      <ul>
        <li><strong>Developed by:</strong> Microsoft Corporation</li>
        <li><strong>Type:</strong> Word Processing Software</li>
        <li><strong>Purpose:</strong> Create, edit, format & print documents</li>
        <li><strong>First version launched:</strong> 1983</li>
        <li><strong>Default Font:</strong> Calibri | <strong>Size:</strong> 11 pt</li>
        <li><strong>File Extensions:</strong> .docx (normal), .doc (old), .dotx (template), .docm (macro-enabled)</li>
        <li><strong>Maximum Zoom:</strong> 500% | <strong>Minimum Zoom:</strong> 10%</li>
        <li><strong>Max Font Size (list):</strong> 72 pt | <strong>Max Manual:</strong> 1638 pt</li>
      </ul>

      <h3>Interface Parts (Most Asked)</h3>
      <ul>
        <li>Quick Access Toolbar → Save, Undo, Redo (customizable)</li>
        <li>Title Bar → Shows document name</li>
        <li>Ribbon → File, Home, Insert, Design, Layout, References, Mailings, Review, View</li>
      </ul>

      <h3>File Tab Options</h3>
      <ul>
        <li>New (Ctrl+N) • Open (Ctrl+O) • Save (Ctrl+S) • Save As (F12) • Print (Ctrl+P) • Share • Export • Close</li>
      </ul>

      <h3>Home Tab (Highest Weightage)</h3>
      <ul>
        <li><strong>Clipboard:</strong> Cut (Ctrl+X), Copy (Ctrl+C), Paste (Ctrl+V)</li>
        <li><strong>Font:</strong> Bold (Ctrl+B), Italic (Ctrl+I), Underline (Ctrl+U), Font Dialog (Ctrl+D)</li>
        <li><strong>Paragraph:</strong>
          <ul>
            <li>Alignment: Left (Ctrl+L), Center (Ctrl+E), Right (Ctrl+R), Justify (Ctrl+J)</li>
            <li>Line Spacing: 1.0 (Ctrl+1), 1.5 (Ctrl+5), 2.0 (Ctrl+2)</li>
            <li>Bullets, Numbering, Indent, Shading</li>
          </ul>
        </li>
      </ul>

      <h3>Insert Tab</h3>
      <ul>
        <li>Pages, Tables, Pictures, Shapes, Icons</li>
        <li><strong>Hyperlink:</strong> Ctrl+K</li>
        <li><strong>Header & Footer:</strong> Page number, date, title</li>
        <li><strong>Drop Cap:</strong> Large first letter (newspaper style)</li>
        <li>Symbols, Equation</li>
      </ul>

      <h3>Design & Layout</h3>
      <ul>
        <li>Design → Themes, Colors, Watermark, Page Color</li>
        <li>Layout → Margins, Orientation (Portrait/Landscape), Columns, Breaks, Indent</li>
      </ul>

      <h3>Mailings → Mail Merge (Very Important)</h3>
      <div class="highlight key">Same letter to multiple recipients with different names/addresses</div>

      <h3>Review Tab</h3>
      <ul>
        <li>Spelling & Grammar → <strong>F7</strong></li>
        <li>Thesaurus, Translate, Track Changes</li>
      </ul>

      <h3>View Tab</h3>
      <ul>
        <li>Zoom (10–500%), Ruler, Macros, Print Layout, Read Mode</li>
      </ul>

      <h2>All Important Shortcuts (Must Remember)</h2>
      <table class="comparison-table">
        <tr>
          <th>Action</th>
          <th>Shortcut</th>
        </tr>
        <tr>
          <td>New</td>
          <td>Ctrl+N</td>
        </tr>
        <tr>
          <td>Open</td>
          <td>Ctrl+O</td>
        </tr>
        <tr>
          <td>Save</td>
          <td>Ctrl+S</td>
        </tr>
        <tr>
          <td>Print</td>
          <td>Ctrl+P</td>
        </tr>
        <tr>
          <td>Close Document</td>
          <td>Ctrl+W</td>
        </tr>
        <tr>
          <td>Close Word</td>
          <td>Alt+F4</td>
        </tr>
        <tr>
          <td>Select All</td>
          <td>Ctrl+A</td>
        </tr>
        <tr>
          <td>Cut / Copy / Paste</td>
          <td>Ctrl+X / C / V</td>
        </tr>
        <tr>
          <td>Undo / Redo</td>
          <td>Ctrl+Z / Y</td>
        </tr>
        <tr>
          <td>Bold / Italic / Underline</td>
          <td>Ctrl+B / I / U</td>
        </tr>
        <tr>
          <td>Font Dialog</td>
          <td>Ctrl+D</td>
        </tr>
        <tr>
          <td>Find / Replace</td>
          <td>Ctrl+F / H</td>
        </tr>
        <tr>
          <td>Hyperlink</td>
          <td>Ctrl+K</td>
        </tr>
        <tr>
          <td>Left / Center / Right / Justify</td>
          <td>Ctrl+L / E / R / J</td>
        </tr>
        <tr>
          <td>Single / 1.5 / Double Spacing</td>
          <td>Ctrl+1 / 5 / 2</td>
        </tr>
        <tr>
          <td>Spelling & Grammar</td>
          <td>F7</td>
        </tr>
        <tr>
          <td>Superscript</td>
          <td>Ctrl+Shift++</td>
        </tr>
        <tr>
          <td>Subscript</td>
          <td>Ctrl+=</td>
        </tr>
        <tr>
          <td>Double Underline</td>
          <td>Ctrl+Shift+D</td>
        </tr>
        <tr>
          <td>Start / End of Document</td>
          <td>Ctrl+Home / End</td>
        </tr>
      </table>

      <h2>Frequently Asked PYQs (SSC | Railway | Banking)</h2>
      <ul>
        <li>Default font & size → Calibri, 11</li>
        <li>Maximum zoom → 500%</li>
        <li>Spelling check → F7</li>
        <li>Print Preview → Ctrl+Alt+I or Ctrl+P → Preview</li>
        <li>Not a paragraph alignment → Precise</li>
        <li>Not in Font dialog → Double Strikethrough</li>
        <li>Quick Access Toolbar default → Save, Undo, Redo</li>
        <li>Watermark → Faint background text (DRAFT, CONFIDENTIAL)</li>
        <li>Editing → Change content | Formatting → Change appearance</li>
      </ul>
    `
  },
  {
    id: "excel-powerpoint",
    title: "Microsoft Excel & PowerPoint Basics",
    content: `
      <h3>Microsoft Excel - Basics</h3>
      <ul>
        <li>Excel is a spreadsheet application developed by Microsoft Corporation</li>
        <li>Layout consists of small boxes called <strong>Cells</strong> (intersection of Row and Column)</li>
        <li>Horizontal → Row (numbered: 1, 2, 3...)</li>
        <li>Vertical → Column (lettered: A, B, C...)</li>
        <li>Active Cell → Currently selected cell with thick border</li>
        <li>Worksheet → A single sheet containing cells for data entry and manipulation</li>
        <li>Workbook → A file containing multiple worksheets</li>
        <li>Maximum worksheet size (Excel 2010+): 1,048,576 rows × 16,384 columns</li>
        <li>Default worksheets in new workbook: 3 (can be renamed)</li>
        <li>Rename worksheet: Right-click → Rename</li>
        <li>Add new worksheet shortcuts: Shift + F11 or Alt + Shift + F1</li>
      </ul>

      <h3>Cell Referencing in Excel</h3>
      <ul>
        <li><strong>Relative Reference</strong> (e.g., A1) → Changes when copied (both column & row adjust)</li>
        <li><strong>Absolute Reference</strong> (e.g., $A$1) → Never changes (both fixed with $)</li>
        <li><strong>Mixed Reference</strong>:
          <ul>
            <li>$A1 → Column fixed, row changes</li>
            <li>A$1 → Row fixed, column changes</li>
          </ul>
        </li>
      </ul>

      <h3>Important Excel Functions</h3>
      <ul>
        <li>=SUM() → Adds numbers</li>
        <li>=AVERAGE() → Calculates mean</li>
        <li>=MAX(), =MIN() → Highest & lowest value</li>
        <li>=COUNT() → Counts cells with numbers</li>
        <li>=COUNTA() → Counts non-empty cells</li>
        <li>=COUNTIF() → Counts with condition</li>
        <li>=IF() → Logical test (returns value based on true/false)</li>
        <li>=AND(), =OR(), =NOT() → Logical functions</li>
        <li>=LOWER(), =UPPER(), =PROPER() → Text case conversion</li>
        <li>=CONCATENATE() or & → Join text</li>
        <li>=LEFT(), =RIGHT() → Extract characters</li>
        <li>=TODAY() → Current date</li>
        <li>=NOW() → Current date and time</li>
        <li>=TIME(h,m,s) → Converts to time format</li>
        <li>=SQRT(), =POWER(), =ABS(), =PRODUCT(), =MOD() → Math functions</li>
      </ul>

      <h3>Important Excel Shortcuts</h3>
      <ul>
        <li>Ctrl + 0 → Hide column</li>
        <li>Ctrl + 9 → Hide row</li>
        <li>Alt + Enter → New line in same cell</li>
        <li>Ctrl + ; → Insert current date</li>
        <li>Ctrl + Shift + : → Insert current time</li>
        <li>Shift + F11 or Alt + Shift + F1 → New worksheet</li>
        <li>Ctrl + D → Fill down (copy top cell)</li>
        <li>Ctrl + R → Fill right</li>
        <li>Ctrl + Shift + L → Toggle filters</li>
        <li>F2 → Edit cell</li>
        <li>Ctrl + 1 → Format cells dialog</li>
      </ul>

      <h3>Microsoft PowerPoint - Basics</h3>
      <ul>
        <li>PowerPoint is a presentation software from Microsoft Office</li>
        <li>Uses graphical slides to present information</li>
        <li>File extension: .pptx</li>
        <li>Main tabs: Home, Insert, Design, Transitions, Animations, Slide Show, Review, View</li>
        <li>New slide shortcut: Ctrl + M</li>
        <li>Start slideshow: F5 (from beginning), Shift + F5 (from current slide)</li>
        <li>Insert new slide layout options available in Home tab</li>
        <li>Design tab → Themes, colors, backgrounds</li>
        <li>Transitions → Effect when moving between slides</li>
        <li>Animations → Movement of objects within a slide</li>
        <li>Slide Show view → Full screen presentation</li>
      </ul>

      <h3>PowerPoint Shortcuts</h3>
      <ul>
        <li>Ctrl + M → Insert new slide</li>
        <li>F5 → Start slideshow from first slide</li>
        <li>Shift + F5 → Start from current slide</li>
        <li>Esc → Exit slideshow</li>
        <li>Ctrl + D → Duplicate slide</li>
      </ul>
    `
  }
];