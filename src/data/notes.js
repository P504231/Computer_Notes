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
      <table class="comparison-table">
        <tr>
          <th>Era/Device</th>
          <th>Approx. Year</th>
          <th>Inventory/Developer</th>
          <th>Key Feature</th>
        </tr>
        <tr>
          <td>Abacus</td>
          <td>3000 BC</td>
          <td>China</td>
          <td>Mechanical calculation</td>
        </tr>
        <tr>
          <td>Napier's Bones</td>
          <td>1617</td>
          <td>John Napier</td>
          <td>Multiplication, division</td>
        </tr>
        <tr>
          <td>Pascaline</td>
          <td>1642</td>
          <td>Blaise Pascal</td>
          <td>Addition, subtraction</td>
        </tr>
        <tr>
          <td>Analytical Engine</td>
          <td>1837</td>
          <td>Charles Babbage</td>
          <td>First general-purpose computing concept (programmable)</td>
        </tr>
        <tr>
          <td>Tabulating Machine</td>
          <td>1890</td>
          <td>Herman Hollerith & James Powers</td>
          <td>Used punch cards to read and tabulate data</td>
        </tr>
        <tr>
          <td>Turing Machine</td>
          <td>1936</td>
          <td>Alan Turing</td>
          <td>Theoretical model of computation (foundation of modern computing)</td>
        </tr>
        <tr>
          <td>ABC (Atanasoff-Berry Computer)</td>
          <td>1937-1942</td>
          <td>John Vincent Atanasoff & Clifford Berry</td>
          <td>First electronic digital computer (used binary, electronic switches)</td>
        </tr>
        <tr>
          <td>ENIAC</td>
          <td>1945</td>
          <td>J. Presper Eckert & John Mauchly (1st Generation)</td>
          <td>First electronic, general-purpose programmable computer</td>
        </tr>
        <tr>
          <td>UNIVAC I</td>
          <td>1951</td>
          <td>Eckert & Mauchly</td>
          <td>First commercial electronic computer</td>
        </tr>
        <tr>
          <td>IBM System/360</td>
          <td>1964</td>
          <td>IBM</td>
          <td>Mainframe with integrated circuits, family of compatible machines</td>
        </tr>
        <tr>
          <td>Microprocessor Era</td>
          <td>1971</td>
          <td>Intel</td>
          <td>Computers became personal devices (Intel 4004 microprocessor)</td>
        </tr>
        <tr>
          <td>Modern Supercomputer</td>
          <td>Present</td>
          <td>Seymour Cray / various</td>
          <td>High-speed computation, massively parallel processing</td>
        </tr>
      </table>

      <h3>Important Facts</h3>
      <ul>
        <li>Father of Computer → Charles Babbage</li>
        <li>First Programmer → Lady Ada Lovelace (Ada Augusta)</li>
        <li>Computer Literacy Day → December 2nd</li>
        <li>First computer in India → HEC-2M (1955, imported)</li>
        <li>First indigenous digital computer → TIFRAC (1960)</li>
        <li>India's First Computer: Siddharth (1986), built by ECL (Electronics Corporation of India)</li>
        <li>First computer installed in India → Bangalore Main Post Office</li>
        <li>India's first supercomputer → PARAM 8000 (1991)</li>
        <li>Developer of PARAM → Dr. Vijay P. Bhatkar (C-DAC)</li>
        <li>First electronic digital computer (world) → ABC (Atanasoff-Berry Computer)</li>
        <li>First general-purpose electronic computer → ENIAC</li>
        <li>First supercomputer of the world → CDC 6600 (1964)</li>
        <li>ENIAC: Electronic Numerical Integrator and Computer</li>
      </ul>
    `
  },
  {
    id: "generations",
    title: "Computer Generations",
    content: `
      <table class="comparison-table">
        <tr>
          <th>Generation</th>
          <th>Key Technology</th>
          <th>Language</th>
          <th>Examples</th>
        </tr>
        <tr>
          <td>1st (1940–1956)</td>
          <td>Vacuum Tubes</td>
          <td>Machine Language</td>
          <td>ENIAC, EDVAC, UNIVAC</td>
        </tr>
        <tr>
          <td>2nd (1957–1963)</td>
          <td>Transistors</td>
          <td>Symbolic / Assembly (COBOL, FORTRAN)</td>
          <td>IBM 1401, ATLAS</td>
        </tr>
        <tr>
          <td>3rd (1964–1971)</td>
          <td>Integrated Circuits (ICs)</td>
          <td>High-Level (C, C++)</td>
          <td>IBM 360, CDC</td>
        </tr>
        <tr>
          <td>4th (1971–Present)</td>
          <td>Large Scale ICs (Microprocessors)</td>
          <td>Modern Languages (Java, Python), Query → SQL</td>
          <td>Personal Computers (PCs), Apple Mac</td>
        </tr>
        <tr>
          <td>5th (Present)</td>
          <td>AI & Optical Fibers</td>
          <td>AI-based (Prolog)</td>
          <td>Supercomputers, AI</td>
        </tr>
      </table>

      <h3>Detailed Overview</h3>
      <h4>First Generation (1942-1952)</h4>
      <ul>
        <li>Vacuum tubes • Large size • ENIAC</li>
      </ul>

      <h4>Second Generation (1952-1964)</h4>
      <ul>
        <li>Transistors • Smaller • IBM 700</li>
      </ul>

      <h4>Third Generation (1964-1971)</h4>
      <ul>
        <li>Integrated circuits • IBM 360</li>
      </ul>

      <h4>Fourth Generation (1971-Present)</h4>
      <ul>
        <li>Microprocessors • Personal Computers</li>
      </ul>

      <h4>Fifth Generation (Present-Future)</h4>
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
        <li>CPU (Central Processing Unit) - "Brain of Computer"</li>
        <li>Memory Unit</li>
        <li>Input/Output Unit</li>
      </ol>

      <h3>CPU Components</h3>
      <ul>
        <li><strong>Functions:</strong> Executes instructions, processes data</li>
        <li><strong>Main Components:</strong>
          <ul>
            <li><strong>ALU:</strong> Arithmetic (+ − × ÷) & Logical operations</li>
            <li><strong>CU:</strong> Controls flow → Fetch → Decode → Execute cycle</li>
            <li><strong>Registers</strong> (high-speed temporary storage):
              <ul>
                <li>Program Counter: Holds the address of the next instruction</li>
                <li>Memory Address Register (MAR): Holds the address of the memory location to be read from or written to</li>
                <li>Memory Buffer Register (MBR): Holds the data being transferred to/from memory</li>
                <li>Instruction Register: Holds the current instruction being executed</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h3>Data Flow Process</h3>
      <ol>
        <li>Input → Memory → CPU Processing → Memory → Output</li>
      </ol>

      <h3>Buses: Communication pathways inside the computer</h3>
      <ul>
        <li>Data Bus: Carries data</li>
        <li>Address Bus: Carries memory addresses</li>
        <li>Control Bus: Carries control signals</li>
      </ul>
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
      <h3>Memory Unit Hierarchy (Speed ↑ Cost ↑ Capacity ↓)</h3>
      <ol>
        <li><strong>Cache Memory</strong>
          <ul>
            <li>Fastest, closest to CPU</li>
            <li>Stores frequently used data/instructions</li>
            <li>Small size, very costly</li>
            <li>High-speed semiconductor memory</li>
            <li>Buffer between CPU and main memory</li>
          </ul>
        </li>
        <li><strong>Primary/Main Memory</strong>
          <ul>
            <li>Volatile (data lost when power off)</li>
            <li>Faster than secondary memory</li>
            <li>Limited capacity</li>
            <li>Types:
              <ul>
                <li><strong>RAM (Random Access Memory)</strong>
                  <ul>
                    <li>Read and write memory</li>
                    <li>CPU can change contents</li>
                    <li>Data lost on power off</li>
                    <li>Types: SRAM (fast, costly), DRAM (cheaper, needs refresh)</li>
                  </ul>
                </li>
                <li><strong>ROM (Read Only Memory)</strong>
                  <ul>
                    <li>Permanent memory</li>
                    <li>Non-volatile, Read only</li>
                    <li>Permanent data (booting instructions)</li>
                    <li>Types: PROM, EPROM, EEPROM</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>Secondary Memory (Auxiliary/Storage)</strong>
          <ul>
            <li>Non-volatile, large capacity, slower</li>
            <li>Examples: HDD, SSD, Pen Drive, CD/DVD, Memory Card, Blu-ray</li>
            <li>Also called auxiliary memory</li>
          </ul>
        </li>
      </ol>

      <div class="highlight">
        <strong>Memory Speed Order:</strong> Registers > Cache > RAM > Secondary Memory<br>
        <strong>Volatile Memory:</strong> RAM<br>
        <strong>Non-Volatile Memory:</strong> ROM, HDD, SSD
      </div>

      <h3>Memory Units</h3>
      <p>Basic Units</p>
      <ul>
        <li>Bit (Binary Digit): Smallest unit (0 or 1)</li>
        <li>Nibble: 4 bits</li>
        <li>Byte: 8 bits</li>
        <li>Word: Group of bits forming a unit</li>
      </ul>
      <p>Larger Units</p>
      <ul>
        <li>1 Kilobyte (KB) = 1024 bytes</li>
        <li>1 Megabyte (MB) = 1024 KB</li>
        <li>1 Gigabyte (GB) = 1024 MB</li>
        <li>1 Terabyte (TB) = 1024 GB</li>
        <li>Larger units: Petabyte, Exabyte, Zettabyte, Yottabyte</li>
      </ul>

      <h3>I/O Techniques</h3>
      <ul>
        <li><strong>Programmed I/O:</strong> CPU waits for the I/O device to finish</li>
        <li><strong>Interrupt-driven I/O:</strong> I/O device interrupts the CPU when ready</li>
        <li><strong>Direct Memory Access (DMA):</strong> Data is transferred directly between memory and I/O devices without CPU intervention</li>
      </ul>

      <h3>Memory Management Concepts</h3>
      <ul>
        <li><strong>Virtual Memory:</strong> A memory management technique that uses hard disk space as RAM</li>
        <li><strong>Deadlock:</strong> A situation where two or more processes are waiting for each other to release resources, causing a standstill</li>
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

      <h3>Translators</h3>
      <ul>
        <li><strong>Assembler:</strong> Converts Assembly Language to Machine Code</li>
        <li><strong>Compiler:</strong> Converts the entire source code (HLL) to Machine Code at once</li>
        <li><strong>Interpreter:</strong> Converts and executes code line-by-line</li>
      </ul>
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
        <li><strong>System Software</strong>
          <ul>
            <li>Provides the core functionality to operate the computer</li>
            <li>Manages hardware and allows other software to run</li>
            <li>Examples:
              <ul>
                <li>Operating Systems (OS): Windows, Linux, Android, macOS</li>
                <li>Device Drivers: Enable communication with hardware (e.g., keyboard, printer)</li>
                <li>Utility Software: For maintenance and configuration (e.g., Antivirus, Disk Cleaner)</li>
                <li>Firmware: Permanent software embedded in hardware (e.g., BIOS – Basic Input Output System)</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>Programming Software (Languages)</strong>
          <ul>
            <li>Used by developers to create applications and websites</li>
            <li>Types:
              <ul>
                <li>Low-Level Language: (e.g., Assembly Language)</li>
                <li>High-Level Language: User-friendly, machine-independent (e.g., C, C++, Java, Python)</li>
              </ul>
            </li>
            <li>Translators: Convert high-level code to machine code</li>
          </ul>
        </li>
        <li><strong>Application Software</strong>
          <ul>
            <li>Designed for end-users to perform specific tasks</li>
            <li>Examples:
              <ul>
                <li>Word Processors: MS Word, Google Docs, WordPad</li>
                <li>Database Software: MS Access, MySQL</li>
                <li>Web Browsers: Google Chrome, Mozilla Firefox, Safari</li>
                <li>Multimedia Software: VLC Media Player, Photoshop</li>
                <li>Presentation Software: MS PowerPoint</li>
                <li>Spreadsheet Software: MS Excel</li>
                <li>Email: Microsoft Outlook</li>
              </ul>
            </li>
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

      <h4>Operating System Components</h4>
      <ul>
        <li><strong>Kernel:</strong> The core component of the OS that manages communication between hardware and software</li>
        <li><strong>Shell:</strong> The user interface that takes commands and runs programs</li>
        <li><strong>Process:</strong> A program in execution</li>
        <li><strong>Thread:</strong> The smallest unit of execution within a process</li>
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
            <li>Most common for keyboards, mice, pen drives</li>
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
    title: "Viruses, Malware & Cybersecurity",
    content: `
      <h3>1. Cybersecurity Basics</h3>
      
      <h4>CIA Triad (Core Principles):</h4>
      <table class="comparison-table">
        <tr>
          <th>Principle</th>
          <th>Meaning</th>
          <th>Example</th>
        </tr>
        <tr>
          <td><strong>Confidentiality</strong></td>
          <td>Data is private, only authorized access</td>
          <td>Encrypted messages</td>
        </tr>
        <tr>
          <td><strong>Integrity</strong></td>
          <td>Data is accurate, untampered</td>
          <td>Digital signatures</td>
        </tr>
        <tr>
          <td><strong>Availability</strong></td>
          <td>Data accessible when needed</td>
          <td>24/7 server uptime</td>
        </tr>
      </table>

      <h4>Key Security Terms:</h4>
      <ul>
        <li><strong>Threat:</strong> Potential danger (hacker, virus)</li>
        <li><strong>Vulnerability:</strong> System weakness (outdated software)</li>
        <li><strong>Risk:</strong> Threat + Vulnerability = Potential loss</li>
      </ul>

      <h3>2. Computer Virus</h3>
      <ul>
        <li><strong>Definition:</strong> Self-replicating malicious program</li>
        <li><strong>VIRUS:</strong> Vital Information Resources Under Siege</li>
        <li><strong>First Virus:</strong> Brain (1986) - Pakistan</li>
        <li><strong>Key Feature:</strong> CAN self-replicate</li>
      </ul>

      <h3>3. Malware Types Comparison</h3>
      <table class="comparison-table">
        <tr>
          <th>Type</th>
          <th>Self-Replicate?</th>
          <th>Main Function</th>
          <th>Examples</th>
        </tr>
        <tr>
          <td><strong>Virus</strong></td>
          <td>YES</td>
          <td>Infects files, spreads when executed</td>
          <td>Brain, Melissa, CIH</td>
        </tr>
        <tr>
          <td><strong>Worm</strong></td>
          <td>YES</td>
          <td>Spreads via networks automatically</td>
          <td>ILOVEYOU, WannaCry</td>
        </tr>
        <tr>
          <td><strong>Trojan Horse</strong></td>
          <td>NO</td>
          <td>Disguises as legitimate software</td>
          <td>Zeus, Back Orifice</td>
        </tr>
        <tr>
          <td><strong>Ransomware</strong></td>
          <td>Sometimes</td>
          <td>Encrypts files, demands ransom</td>
          <td>WannaCry, Locky</td>
        </tr>
        <tr>
          <td><strong>Spyware</strong></td>
          <td>NO</td>
          <td>Monitors user activity secretly</td>
          <td>Keyloggers, Adware</td>
        </tr>
        <tr>
          <td><strong>Rootkit</strong></td>
          <td>NO</td>
          <td>Hides malware, hard to detect</td>
          <td>Sony BMG, ZeroAccess</td>
        </tr>
        <tr>
          <td><strong>Logic Bomb</strong></td>
          <td>NO</td>
          <td>Activates on specific conditions/time</td>
          <td>Time bombs</td>
        </tr>
      </table>

      <h4>Virus Sub-Types:</h4>
      <ul>
        <li><strong>Boot Sector:</strong> Infects boot record (Brain, Michelangelo)</li>
        <li><strong>File Infector:</strong> Attaches to .exe files (Jerusalem, Cascade)</li>
        <li><strong>Macro Virus:</strong> Uses Office macros (Melissa)</li>
        <li><strong>Polymorphic:</strong> Changes signature (Storm Worm)</li>
        <li><strong>Stealth:</strong> Hides from antivirus (Brain, Whale)</li>
      </ul>

      <h3>4. Hacker Classification</h3>
      <table class="comparison-table">
        <tr>
          <th>Type</th>
          <th>Intent</th>
          <th>Legality</th>
          <th>Purpose</th>
        </tr>
        <tr>
          <td><strong>White Hat</strong></td>
          <td>Good/Helpful</td>
          <td>Legal (with permission)</td>
          <td>Security testing, protection</td>
        </tr>
        <tr>
          <td><strong>Black Hat</strong></td>
          <td>Bad/Harmful</td>
          <td>Illegal</td>
          <td>Theft, damage, profit</td>
        </tr>
        <tr>
          <td><strong>Grey Hat</strong></td>
          <td>Mixed</td>
          <td>Illegal but may report</td>
          <td>Curiosity, recognition</td>
        </tr>
        <tr>
          <td><strong>Script Kiddie</strong></td>
          <td>Amateur</td>
          <td>Illegal</td>
          <td>Uses others' tools, attention</td>
        </tr>
      </table>

      <h3>5. Common Cyber Attacks</h3>
      <table class="comparison-table">
        <tr>
          <th>Attack</th>
          <th>How it Works</th>
          <th>Prevention</th>
        </tr>
        <tr>
          <td><strong>Phishing</strong></td>
          <td>Fake emails/websites for data theft</td>
          <td>Verify sender, don't click links</td>
        </tr>
        <tr>
          <td><strong>Packet Sniffing</strong></td>
          <td>Intercepts network data</td>
          <td>Use HTTPS, VPN, encryption</td>
        </tr>
        <tr>
          <td><strong>Spoofing</strong></td>
          <td>Impersonates legitimate source</td>
          <td>Authentication, digital certificates</td>
        </tr>
        <tr>
          <td><strong>DDoS</strong></td>
          <td>Floods system with traffic</td>
          <td>DDoS protection, traffic filtering</td>
        </tr>
        <tr>
          <td><strong>Man-in-the-Middle</strong></td>
          <td>Intercepts communication</td>
          <td>Encryption, secure protocols</td>
        </tr>
      </table>

      <h3>6. Security Measures</h3>
      
      <h4>Security Tools:</h4>
      <ul>
        <li><strong>Firewall:</strong> Blocks unauthorized network access</li>
        <li><strong>Antivirus:</strong> Detects/removes malware</li>
        <li><strong>VPN:</strong> Encrypts internet traffic</li>
        <li><strong>IDS/IPS:</strong> Detects/prevents intrusions</li>
      </ul>

      <h4>Access Control:</h4>
      <table class="comparison-table">
        <tr>
          <th>Term</th>
          <th>Purpose</th>
          <th>Example</th>
        </tr>
        <tr>
          <td><strong>Authentication</strong></td>
          <td>Verify "who you are"</td>
          <td>Password, fingerprint, OTP</td>
        </tr>
        <tr>
          <td><strong>Authorization</strong></td>
          <td>Determine "what you can do"</td>
          <td>Admin vs User permissions</td>
        </tr>
        <tr>
          <td><strong>Accounting</strong></td>
          <td>Record "what you did"</td>
          <td>Log files, audit trails</td>
        </tr>
      </table>

      <h3>7. Prevention & Best Practices</h3>
      <div class="highlight">
        <strong>🛡️ Essential Security Measures:</strong><br>
        1. Keep antivirus & software updated<br>
        2. Use strong, unique passwords<br>
        3. Regular data backups<br>
        4. Don't click suspicious links/attachments<br>
        5. Use legitimate software only<br>
        6. Enable firewall<br>
        7. Use encryption (HTTPS, VPN)<br>
        8. Regular security awareness
      </div>

      <h3>8. Quick Exam Revision</h3>
      <table class="comparison-table">
        <tr>
          <th>Question</th>
          <th>Answer</th>
        </tr>
        <tr>
          <td>First computer virus?</td>
          <td>Brain (1986)</td>
        </tr>
        <tr>
          <td>Virus full form?</td>
          <td>Vital Information Resources Under Siege</td>
        </tr>
        <tr>
          <td>Can Trojan self-replicate?</td>
          <td>NO (key difference from virus/worm)</td>
        </tr>
        <tr>
          <td>Legal hacking type?</td>
          <td>White Hat/Ethical Hacker</td>
        </tr>
        <tr>
          <td>Core security principles?</td>
          <td>CIA Triad (Confidentiality, Integrity, Availability)</td>
        </tr>
        <tr>
          <td>Verifies identity?</td>
          <td>Authentication</td>
        </tr>
        <tr>
          <td>Grants access rights?</td>
          <td>Authorization</td>
        </tr>
        <tr>
          <td>Fake emails attack?</td>
          <td>Phishing</td>
        </tr>
        <tr>
          <td>Blocks unauthorized access?</td>
          <td>Firewall</td>
        </tr>
        <tr>
          <td>Encrypts files for ransom?</td>
          <td>Ransomware</td>
        </tr>
      </table>

      <div class="key-point">
        <strong>🎯 Critical Differences:</strong><br>
        • Virus/Worm: CAN self-replicate<br>
        • Trojan/Others: CANNOT self-replicate<br>
        • White Hat: Legal security testing<br>
        • Black Hat: Illegal malicious hacking<br>
        • Authentication: Who you are<br>
        • Authorization: What you can do
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
    id: "networking-full",
    title: "Complete Networking Notes",
    content: `
      <h3>1. Data Communication Fundamentals</h3>
      
      <h4>What is Data Communication?</h4>
      <p><strong>Definition:</strong> Exchange of data between two or more devices.</p>
      
      <h4>Four Key Characteristics of Data Communication:</h4>
      <table class="comparison-table">
        <tr>
          <th>Characteristic</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
        <tr>
          <td><strong>1. Delivery</strong></td>
          <td>Data must reach correct destination at right time</td>
          <td>Correct email recipient</td>
        </tr>
        <tr>
          <td><strong>2. Accuracy</strong></td>
          <td>Data must be delivered accurately without errors</td>
          <td>Exactly what was sent should be received</td>
        </tr>
        <tr>
          <td><strong>3. Timeliness</strong></td>
          <td>Data must be delivered in timely manner</td>
          <td>Real-time communication needs timely delivery</td>
        </tr>
        <tr>
          <td><strong>4. Jitter</strong></td>
          <td>Variation in packet arrival time (should be minimal)</td>
          <td>Consistent streaming without interruptions</td>
        </tr>
      </table>

      <h4>Data Communication Components:</h4>
      <table class="comparison-table">
        <tr>
          <th>Component</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
        <tr>
          <td><strong>Sender</strong></td>
          <td>Device that sends data</td>
          <td>Computer, Phone, Server</td>
        </tr>
        <tr>
          <td><strong>Transmission Medium</strong></td>
          <td>Path through which data travels</td>
          <td>Ethernet cable, Fiber optic, Wi-Fi</td>
        </tr>
        <tr>
          <td><strong>Receiver</strong></td>
          <td>Device that receives data</td>
          <td>Another computer, Printer</td>
        </tr>
        <tr>
          <td><strong>Message & Protocols</strong></td>
          <td>Data + Rules for communication</td>
          <td>Data with TCP/IP rules</td>
        </tr>
      </table>

      <h4>Signals in Data Communication:</h4>
      <table class="comparison-table">
        <tr>
          <th>Signal Type</th>
          <th>Description</th>
          <th>Examples</th>
          <th>Key Feature</th>
        </tr>
        <tr>
          <td><strong>Analog Data</strong></td>
          <td>Continuous data, smooth variations</td>
          <td>• Human voice<br>• Heartbeat<br>• Breathing rate<br>• Analog clock</td>
          <td>Continuous wave form</td>
        </tr>
        <tr>
          <td><strong>Digital Data</strong></td>
          <td>Discrete values, fixed measurements</td>
          <td>• Digital clock<br>• Computer data<br>• Binary numbers (0s & 1s)</td>
          <td>Discrete steps</td>
        </tr>
      </table>

      <h3>2. Computer Network Basics</h3>
      
      <h4>What is a Computer Network?</h4>
      <p><strong>Definition:</strong> Interconnected computers sharing resources and information.</p>
      
      <h4>Network Components:</h4>
      <table class="comparison-table">
        <tr>
          <th>Component</th>
          <th>Description</th>
          <th>Also Called</th>
        </tr>
        <tr>
          <td><strong>Nodes</strong></td>
          <td>Connected devices in network</td>
          <td>Computers, Printers, Servers</td>
        </tr>
        <tr>
          <td><strong>Connection Media</strong></td>
          <td>Medium for data transmission</td>
          <td>Cables, Wireless signals</td>
        </tr>
      </table>

      <h4>Connection Media Types:</h4>
      <table class="comparison-table">
        <tr>
          <th>Media Type</th>
          <th>Description</th>
          <th>Examples</th>
          <th>Advantages</th>
          <th>Disadvantages</th>
        </tr>
        <tr>
          <td><strong>Wired Media</strong></td>
          <td>Physical cables connecting devices</td>
          <td>• Ethernet cables<br>• Fiber optic cables<br>• Coaxial cables</td>
          <td>• Faster<br>• More secure<br>• Reliable</td>
          <td>• Limited mobility<br>• Installation required</td>
        </tr>
        <tr>
          <td><strong>Wireless Media</strong></td>
          <td>No physical cables, uses signals</td>
          <td>• Wi-Fi<br>• Bluetooth<br>• Infrared</td>
          <td>• Mobility<br>• Easy installation<br>• Flexible</td>
          <td>• Slower<br>• Less secure<br>• Signal interference</td>
        </tr>
      </table>

      <h3>3. Types of Networks (Based on Geographical Area)</h3>
      
      <table class="comparison-table">
        <tr>
          <th>Network Type</th>
          <th>Full Form</th>
          <th>Coverage Area</th>
          <th>Range</th>
          <th>Speed</th>
          <th>Examples</th>
          <th>Key Features</th>
        </tr>
        <tr>
          <td><strong>PAN</strong></td>
          <td>Personal Area Network</td>
          <td>Personal space around user</td>
          <td>10 meters (30 feet)</td>
          <td>Slow to Medium</td>
          <td>• Bluetooth devices<br>• Smart watch + phone<br>• Wireless headphones<br>• Smart speaker</td>
          <td>• Single user only<br>• Short range<br>• Personal devices<br>• Uses Bluetooth</td>
        </tr>
        <tr>
          <td><strong>LAN</strong></td>
          <td>Local Area Network</td>
          <td>Building/Campus</td>
          <td>Up to 1 km</td>
          <td>Very High</td>
          <td>• Office network<br>• School computer lab<br>• Home Wi-Fi<br>• Cyber cafe</td>
          <td>• Uses Ethernet cables<br>• High speed<br>• Limited area<br>• Most common type<br>• Owned by organization</td>
        </tr>
        <tr>
          <td><strong>CAN</strong></td>
          <td>Campus Area Network</td>
          <td>University/Corporate Campus</td>
          <td>1-5 km</td>
          <td>High</td>
          <td>• University campus<br>• Corporate buildings<br>• Multiple LANs connected<br>• Hospital complex</td>
          <td>• Connects multiple LANs<br>• Larger than LAN<br>• Smaller than MAN<br>• Owned by institution</td>
        </tr>
        <tr>
          <td><strong>MAN</strong></td>
          <td>Metropolitan Area Network</td>
          <td>City/Town</td>
          <td>5-50 km</td>
          <td>Medium to High</td>
          <td>• Cable TV network<br>• City-wide Wi-Fi<br>• Bank branches in city<br>• Government offices</td>
          <td>• Covers entire city<br>• Larger than LAN<br>• Smaller than WAN<br>• May be owned by multiple organizations</td>
        </tr>
        <tr>
          <td><strong>WAN</strong></td>
          <td>Wide Area Network</td>
          <td>Country/Continent/World</td>
          <td>50+ km</td>
          <td>Slow to Medium</td>
          <td>• The Internet<br>• Bank ATMs nationwide<br>• Multi-national companies<br>• Global corporate networks</td>
          <td>• Largest network type<br>• Uses satellites, cables<br>• Connects cities/countries<br>• May be public/private</td>
        </tr>
        <tr>
          <td><strong>SAN</strong></td>
          <td>Storage Area Network</td>
          <td>Data Center</td>
          <td>Building/Data Center</td>
          <td>Very High</td>
          <td>• Data storage networks<br>• Backup systems<br>• Cloud storage servers<br>• Enterprise storage</td>
          <td>• Specialized for storage<br>• High-speed data transfer<br>• Block-level access<br>• Dedicated to storage</td>
        </tr>
        <tr>
          <td><strong>VPN</strong></td>
          <td>Virtual Private Network</td>
          <td>Virtual/Overlay network</td>
          <td>Global (over internet)</td>
          <td>Depends on internet</td>
          <td>• Secure office access<br>• Remote work networks<br>• Privacy protection<br>• Bypass restrictions</td>
          <td>• Creates secure tunnel<br>• Hides user identity<br>• Temporary IP address<br>• Secure encryption</td>
        </tr>
      </table>

      <div class="key-point">
        <strong>📊 NETWORK SIZE COMPARISON (Smallest to Largest):</strong><br>
        PAN → LAN → CAN → MAN → WAN<br>
        (Personal → Local → Campus → City → Worldwide)
      </div>

      <h3>4. Connection Types</h3>
      
      <table class="comparison-table">
        <tr>
          <th>Connection Type</th>
          <th>Description</th>
          <th>Devices Connected</th>
          <th>Diagram</th>
          <th>Example</th>
          <th>Advantages</th>
        </tr>
        <tr>
          <td><strong>Point-to-Point</strong></td>
          <td>Direct dedicated link between two devices</td>
          <td>Only 2 devices</td>
          <td>A ↔ B</td>
          <td>• Computer to printer<br>• Two routers connected<br>• Phone hotspot to laptop</td>
          <td>• Simple<br>• Dedicated bandwidth<br>• Secure</td>
        </tr>
        <tr>
          <td><strong>Multi-Point</strong></td>
          <td>Multiple devices share single link</td>
          <td>3 or more devices</td>
          <td>A ← Hub → B, C, D</td>
          <td>• Multiple computers to router<br>• Bus topology network<br>• Wi-Fi network</td>
          <td>• Cost-effective<br>• Easy to expand<br>• Shared resources</td>
        </tr>
      </table>

      <h3>5. Data Communication Modes (Transmission Modes)</h3>
      
      <table class="comparison-table">
        <tr>
          <th>Mode</th>
          <th>Direction</th>
          <th>Communication Type</th>
          <th>Examples</th>
          <th>Key Features</th>
          <th>Exam Tips</th>
        </tr>
        <tr>
          <td><strong>Simplex</strong></td>
          <td>One-way only</td>
          <td>Only sender → receiver<br>No reply possible</td>
          <td>• Keyboard to CPU<br>• TV broadcast<br>• Speaker output<br>• Radio station</td>
          <td>• Unidirectional<br>• No feedback<br>• Fixed roles</td>
          <td>• One direction only<br>• No return path</td>
        </tr>
        <tr>
          <td><strong>Half-Duplex</strong></td>
          <td>Two-way, but ONE at a time</td>
          <td>Both can send/receive but NOT simultaneously<br>Turn-based communication</td>
          <td>• Walkie-talkie<br>• Two-way radio<br>• Push-to-talk<br>• CB radio</td>
          <td>• Bidirectional<br>• One direction at a time<br>• Requires waiting</td>
          <td>• Two-way but alternate<br>• "Over" signal used</td>
        </tr>
        <tr>
          <td><strong>Full-Duplex</strong></td>
          <td>Two-way SIMULTANEOUSLY</td>
          <td>Both can send/receive at SAME time</td>
          <td>• Telephone<br>• Mobile phone<br>• Video call<br>• Online chat</td>
          <td>• Bidirectional<br>• Simultaneous<br>• Most efficient</td>
          <td>• Both directions at once<br>• Most modern systems</td>
        </tr>
      </table>

      <h3>6. Network Topologies (Physical Layout)</h3>
      
      <h4>What is Network Topology?</h4>
      <p><strong>Definition:</strong> Physical or logical arrangement of nodes (computers) in a network.</p>

      <table class="comparison-table">
        <tr>
          <th>Topology</th>
          <th>Diagram Shape</th>
          <th>Cable Formula</th>
          <th>Advantages</th>
          <th>Disadvantages</th>
          <th>Use Cases</th>
          <th>Special Features</th>
        </tr>
        <tr>
          <td><strong>Bus Topology</strong></td>
          <td>Straight line (Linear)</td>
          <td>Single backbone cable</td>
          <td>• Cheapest<br>• Simple to install<br>• Easy to add devices</td>
          <td>• Single cable failure = Entire network fails<br>• Slow speed<br>• Difficult to troubleshoot</td>
          <td>• Small networks<br>• Temporary setups<br>• Early networks</td>
          <td>• Uses TERMINATORS at ends<br>• Multi-point connection</td>
        </tr>
        <tr>
          <td><strong>Ring Topology</strong></td>
          <td>Circle/Ring</td>
          <td>Number of nodes = Number of cables</td>
          <td>• No data collisions<br>• Equal access for all<br>• Good for heavy traffic</td>
          <td>• Single node failure = Network fails<br>• Difficult to add devices<br>• Slow performance</td>
          <td>• Token Ring networks<br>• FDDI networks<br>• Some industrial systems</td>
          <td>• Unidirectional flow<br>• All nodes must be ON<br>• Data passes through all nodes</td>
        </tr>
        <tr>
          <td><strong>Star Topology</strong></td>
          <td>Star (Central hub)</td>
          <td>n cables for n devices</td>
          <td>• Easy to troubleshoot<br>• Single failure doesn't affect others<br>• Fast performance</td>
          <td>• Hub failure = Entire network fails<br>• Expensive (needs hub)<br>• More cables needed</td>
          <td>• Most offices<br>• Home networks<br>• Modern LANs</td>
          <td>• Most popular topology<br>• Uses hub/switch at center<br>• Easy to add/remove devices</td>
        </tr>
        <tr>
          <td><strong>Mesh Topology</strong></td>
          <td>Fully connected web</td>
          <td>n(n-1)/2 cables</td>
          <td>• Most reliable<br>• Fastest communication<br>• No single point of failure</td>
          <td>• Most expensive<br>• Too many cables<br>• Difficult to manage</td>
          <td>• Military networks<br>• Critical systems<br>• Banking networks</td>
          <td>• Every node to every node<br>• Most redundant<br>• Formula important for exams</td>
        </tr>
        <tr>
          <td><strong>Tree Topology</strong></td>
          <td>Hierarchical tree</td>
          <td>Varies (hybrid)</td>
          <td>• Easy to expand<br>• Easy fault identification<br>• Good for large networks</td>
          <td>• Backbone failure = Network fails<br>• Difficult to configure<br>• Expensive</td>
          <td>• Large organizations<br>• University networks<br>• Corporate networks</td>
          <td>• Hybrid (Bus + Star)<br>• Also called extended star<br>• Hierarchical structure</td>
        </tr>
        <tr>
          <td><strong>Hybrid Topology</strong></td>
          <td>Mixed shape</td>
          <td>Varies by combination</td>
          <td>• Flexible<br>• Scalable<br>• Reliable</td>
          <td>• Complex design<br>• Expensive<br>• Difficult to manage</td>
          <td>• Large complex networks<br>• Custom solutions<br>• Enterprise networks</td>
          <td>• Combination of 2+ topologies<br>• No standard design<br>• Custom as per need</td>
        </tr>
      </table>

      <div class="highlight">
        <strong>🔢 MESH TOPOLOGY FORMULA:</strong><br>
        For 'n' devices/nodes:<br>
        Number of cables required = n(n-1)/2<br>
        Example: 5 devices = 5(5-1)/2 = 5×4/2 = 10 cables
      </div>

      <h3>7. Cloud Computing</h3>
      
      <table class="comparison-table">
        <tr>
          <th>Aspect</th>
          <th>Description</th>
          <th>Examples</th>
          <th>Benefits</th>
        </tr>
        <tr>
          <td><strong>Definition</strong></td>
          <td>Internet-based computing providing services (storage, servers) accessible from any device</td>
          <td>• Google Drive<br>• Dropbox<br>• Microsoft OneDrive<br>• iCloud</td>
          <td>• Access anywhere<br>• Automatic backup<br>• Collaboration</td>
        </tr>
        <tr>
          <td><strong>How it Works</strong></td>
          <td>Data stored on internet servers, accessible via any device with internet</td>
          <td>• Photos backup<br>• Document storage<br>• File sharing</td>
          <td>• No local storage needed<br>• Sync across devices<br>• Disaster recovery</td>
        </tr>
        <tr>
          <td><strong>Key Feature</strong></td>
          <td>If device changes, just login to cloud account - all data available</td>
          <td>Change phone → Login to Google Drive → All data restored</td>
          <td>• Device independence<br>• Data persistence<br>• Easy migration</td>
        </tr>
      </table>

      <h3>8. Networking Devices (Complete List)</h3>
      
      <table class="comparison-table">
        <tr>
          <th>Device</th>
          <th>Full Form</th>
          <th>OSI Layer</th>
          <th>Main Function</th>
          <th>Key Features</th>
          <th>Exam Importance</th>
        </tr>
        <tr>
          <td><strong>Modem</strong></td>
          <td>Modulator-Demodulator</td>
          <td>Layer 1</td>
          <td>Converts digital ↔ analog signals</td>
          <td>• Provides internet connection<br>• Uses telephone lines<br>• Often combined with router</td>
          <td>HIGH</td>
        </tr>
        <tr>
          <td><strong>NIC</strong></td>
          <td>Network Interface Card</td>
          <td>Layer 1-2</td>
          <td>Hardware for network connection</td>
          <td>• Has MAC Address<br>• Wired/Wireless<br>• Every device needs NIC</td>
          <td>HIGH</td>
        </tr>
        <tr>
          <td><strong>Repeater</strong></td>
          <td>-</td>
          <td>Layer 1</td>
          <td>Amplifies weak signals</td>
          <td>• Extends network range<br>• Regenerates signals<br>• No intelligence</td>
          <td>MEDIUM</td>
        </tr>
        <tr>
          <td><strong>Hub</strong></td>
          <td>-</td>
          <td>Layer 1</td>
          <td>Connects multiple devices in LAN</td>
          <td>• Broadcasts to all ports<br>• No intelligence<br>• Obsolete</td>
          <td>HIGH</td>
        </tr>
        <tr>
          <td><strong>Switch</strong></td>
          <td>-</td>
          <td>Layer 2</td>
          <td>Intelligent hub for LAN</td>
          <td>• Sends to specific device<br>• Reduces congestion<br>• Modern replacement for hub</td>
          <td>VERY HIGH</td>
        </tr>
        <tr>
          <td><strong>Router</strong></td>
          <td>-</td>
          <td>Layer 3</td>
          <td>Connects different networks</td>
          <td>• Uses IP addresses<br>• Default gateway<br>• Performs NAT</td>
          <td>VERY HIGH</td>
        </tr>
        <tr>
          <td><strong>Gateway</strong></td>
          <td>-</td>
          <td>Layer 3+</td>
          <td>Entry/exit point of network</td>
          <td>• Connects different protocols<br>• Network entry point<br>• Most asked in exams</td>
          <td>VERY HIGH</td>
        </tr>
        <tr>
          <td><strong>Bridge</strong></td>
          <td>-</td>
          <td>Layer 2</td>
          <td>Connects similar networks</td>
          <td>• Filters using MAC address<br>• Connects LAN segments<br>• Less common now</td>
          <td>MEDIUM</td>
        </tr>
      </table>

      <h3>9. Network Protocols</h3>
      
      <table class="comparison-table">
        <tr>
          <th>Protocol</th>
          <th>Full Form</th>
          <th>Purpose</th>
          <th>Port</th>
          <th>Layer</th>
          <th>Example Use</th>
        </tr>
        <tr>
          <td><strong>TCP/IP</strong></td>
          <td>Transmission Control Protocol/Internet Protocol</td>
          <td>Core internet communication</td>
          <td>Various</td>
          <td>Transport/Network</td>
          <td>Basic internet communication</td>
        </tr>
        <tr>
          <td><strong>HTTP</strong></td>
          <td>HyperText Transfer Protocol</td>
          <td>Web page transfer</td>
          <td>80</td>
          <td>Application</td>
          <td>Website browsing</td>
        </tr>
        <tr>
          <td><strong>HTTPS</strong></td>
          <td>HTTP Secure</td>
          <td>Secure web transfer</td>
          <td>443</td>
          <td>Application</td>
          <td>Secure websites (banking)</td>
        </tr>
        <tr>
          <td><strong>FTP</strong></td>
          <td>File Transfer Protocol</td>
          <td>File upload/download</td>
          <td>20/21</td>
          <td>Application</td>
          <td>File sharing</td>
        </tr>
        <tr>
          <td><strong>SMTP</strong></td>
          <td>Simple Mail Transfer Protocol</td>
          <td>Sending email</td>
          <td>25</td>
          <td>Application</td>
          <td>Email sending</td>
        </tr>
        <tr>
          <td><strong>POP3</strong></td>
          <td>Post Office Protocol v3</td>
          <td>Receiving email</td>
          <td>110</td>
          <td>Application</td>
          <td>Email download</td>
        </tr>
        <tr>
          <td><strong>IMAP</strong></td>
          <td>Internet Message Access Protocol</td>
          <td>Email access (keeps on server)</td>
          <td>143</td>
          <td>Application</td>
          <td>Email sync across devices</td>
        </tr>
      </table>

      <h3>10. Addressing Systems</h3>
      
      <h4>MAC Address (Media Access Control Address)</h4>
      <table class="comparison-table">
        <tr>
          <th>Feature</th>
          <th>Description</th>
          <th>Details</th>
        </tr>
        <tr>
          <td><strong>Type</strong></td>
          <td>Physical/Hardware Address</td>
          <td>Permanent address burned into NIC</td>
        </tr>
        <tr>
          <td><strong>Format</strong></td>
          <td>12-digit Hexadecimal</td>
          <td>Example: 00:1A:2B:3C:4D:5E or 00-1A-2B-3C-4D-5E</td>
        </tr>
        <tr>
          <td><strong>Length</strong></td>
          <td>48 bits (6 bytes)</td>
          <td>12 hex digits × 4 bits each = 48 bits</td>
        </tr>
        <tr>
          <td><strong>Structure</strong></td>
          <td>First 6 digits: Manufacturer ID<br>Last 6 digits: Serial number</td>
          <td>OUI (Organizationally Unique Identifier) + Device ID</td>
        </tr>
        <tr>
          <td><strong>Location</strong></td>
          <td>On Network Interface Card (NIC)</td>
          <td>Every NIC has unique MAC address</td>
        </tr>
        <tr>
          <td><strong>Purpose</strong></td>
          <td>Identifies physical device on local network</td>
          <td>Used for local network communication</td>
        </tr>
      </table>

      <h4>IP Address (Internet Protocol Address)</h4>
      <table class="comparison-table">
        <tr>
          <th>Feature</th>
          <th>IPv4</th>
          <th>IPv6</th>
        </tr>
        <tr>
          <td><strong>Type</strong></td>
          <td>Logical/Virtual Address</td>
          <td>Logical/Virtual Address</td>
        </tr>
        <tr>
          <td><strong>Address Size</strong></td>
          <td>32 bits</td>
          <td>128 bits</td>
        </tr>
        <tr>
          <td><strong>Format</strong></td>
          <td>Decimal (4 octets)<br>Example: 192.168.1.1</td>
          <td>Hexadecimal (8 groups)<br>Example: 2001:0db8:85a3:0000:0000:8a2e:0370:7334</td>
        </tr>
        <tr>
          <td><strong>Octet Range</strong></td>
          <td>0 to 255 per octet</td>
          <td>0 to FFFF per group</td>
        </tr>
        <tr>
          <td><strong>Total Addresses</strong></td>
          <td>2³² ≈ 4.3 billion</td>
          <td>2¹²⁸ ≈ 3.4×10³⁸ (trillions)</td>
        </tr>
        <tr>
          <td><strong>Example Validation</strong></td>
          <td>192.168.1.1 ✓ (0-255 range)<br>192.168.300.1 ✗ (300 > 255)</td>
          <td>Always check format not range</td>
        </tr>
        <tr>
          <td><strong>Purpose</strong></td>
          <td>Identifies device on internet/network</td>
          <td>Newer version, more addresses</td>
        </tr>
      </table>

      <div class="highlight">
        <strong>🎯 CRITICAL EXAM DIFFERENCES:</strong><br>
        <strong>MAC Address:</strong> Physical, on NIC, 12 hex digits, Layer 2, Permanent<br>
        <strong>IP Address:</strong> Logical, assigned, decimal/hex, Layer 3, Temporary
      </div>

      <h3>11. Quick Revision & Exam Tips</h3>
      
      <table class="comparison-table">
        <tr>
          <th>Question Type</th>
          <th>Answer</th>
          <th>Reason</th>
        </tr>
        <tr>
          <td>Smallest network type?</td>
          <td>PAN (Personal Area Network)</td>
          <td>10m range, personal devices only</td>
        </tr>
        <tr>
          <td>Largest network type?</td>
          <td>WAN (Wide Area Network)</td>
          <td>Covers countries/continents/world</td>
        </tr>
        <tr>
          <td>Most common LAN topology?</td>
          <td>Star Topology</td>
          <td>Used in offices/homes, easy management</td>
        </tr>
        <tr>
          <td>Most reliable topology?</td>
          <td>Mesh Topology</td>
          <td>No single point of failure</td>
        </tr>
        <tr>
          <td>Cheapest topology?</td>
          <td>Bus Topology</td>
          <td>Single cable, simple installation</td>
        </tr>
        <tr>
          <td>Entry/Exit point of network?</td>
          <td>Gateway</td>
          <td>Most asked MCQ, network boundary</td>
        </tr>
        <tr>
          <td>Physical address is called?</td>
          <td>MAC Address</td>
          <td>On NIC, hardware address</td>
        </tr>
        <tr>
          <td>Logical address is called?</td>
          <td>IP Address</td>
          <td>Assigned by network, virtual address</td>
        </tr>
        <tr>
          <td>Converts digital to analog?</td>
          <td>Modem</td>
          <td>Modulator-Demodulator function</td>
        </tr>
        <tr>
          <td>Amplifies weak signals?</td>
          <td>Repeater</td>
          <td>Extends network range</td>
        </tr>
        <tr>
          <td>Broadcasts to all devices?</td>
          <td>Hub</td>
          <td>No intelligence, sends to all ports</td>
        </tr>
        <tr>
          <td>Sends to specific device only?</td>
          <td>Switch</td>
          <td>Intelligent, checks destination</td>
        </tr>
        <tr>
          <td>Connects different networks?</td>
          <td>Router</td>
          <td>Uses IP addresses, routes data</td>
        </tr>
        <tr>
          <td>One-way communication?</td>
          <td>Simplex</td>
          <td>Keyboard, speaker, TV broadcast</td>
        </tr>
        <tr>
          <td>Two-way alternate communication?</td>
          <td>Half-Duplex</td>
          <td>Walkie-talkie, push-to-talk</td>
        </tr>
        <tr>
          <td>Two-way simultaneous communication?</td>
          <td>Full-Duplex</td>
          <td>Telephone, mobile, video call</td>
        </tr>
      </table>

      <div class="key-point">
        <strong>🚨 MUST REMEMBER FORMULAS:</strong><br>
        1. Mesh Topology Cables = n(n-1)/2<br>
        2. IPv4 valid range = 0 to 255 per octet<br>
        3. MAC Address = 12 hex digits (48 bits)<br>
        4. Network Size: PAN < LAN < CAN < MAN < WAN
      </div>

      <h3>12. Additional Technologies</h3>
      
      <table class="comparison-table">
        <tr>
          <th>Technology</th>
          <th>Full Form</th>
          <th>Purpose</th>
          <th>Key Feature</th>
        </tr>
        <tr>
          <td><strong>VoLTE</strong></td>
          <td>Voice over Long Term Evolution</td>
          <td>High-speed voice calls over 4G</td>
          <td>Faster call setup, better quality</td>
        </tr>
        <tr>
          <td><strong>VoIP</strong></td>
          <td>Voice over Internet Protocol</td>
          <td>Voice calls over internet</td>
          <td>Cheaper than traditional calls</td>
        </tr>
        <tr>
          <td><strong>IoT</strong></td>
          <td>Internet of Things</td>
          <td>Network of physical devices</td>
          <td>Smart devices connected to internet</td>
        </tr>
      </table>
    `
  },
  {
  "id": "logic-gates",
  "title": "Logic Gates & Boolean Algebra",
  "content": `
    <h3>1. What are Logic Gates?</h3>
    <ul>
      <li><strong>Definition:</strong> Basic building blocks of digital circuits</li>
      <li><strong>Function:</strong> Perform logical operations on binary inputs (0/1)</li>
      <li><strong>Inputs:</strong> Usually 2 inputs (A, B) and 1 output (Y)</li>
      <li><strong>Process:</strong> Only digital signals (0 and 1)</li>
    </ul>

    <h3>2. Basic Logic Gates</h3>

    <h4>AND Gate</h4>
    <div class="logic-gate-with-image">
      <div class="gate-image-container">
        <img src="https://cdn.makecode.com/blob/b50209e493382b9e765c12c795ef05c5498e903b/static/cp/learn/logic-lab/logic-gates/and-gate.png" alt="AND Gate" class="gate-image">
        <div class="gate-symbol">∧</div>
      </div>
      <div class="gate-info">
        <strong>Symbol:</strong> ∧ or &<br>
        <strong>Expression:</strong> Y = A·B or Y = A ∧ B<br>
        <strong>Operation:</strong> Output = 1 ONLY when BOTH inputs = 1<br>
        <strong>Real-world analogy:</strong> Both keys needed to open safe<br>
        <strong>Truth Table:</strong>
        <table class="mini-table">
          <tr><th>A</th><th>B</th><th>Y</th></tr>
          <tr><td>0</td><td>0</td><td>0</td></tr>
          <tr><td>0</td><td>1</td><td>0</td></tr>
          <tr><td>1</td><td>0</td><td>0</td></tr>
          <tr><td>1</td><td>1</td><td>1</td></tr>
        </table>
      </div>
    </div>

    <h4>OR Gate</h4>
    <div class="logic-gate-with-image">
      <div class="gate-image-container">
        <img src="https://cdn.makecode.com/blob/e8c22cbac91ce65f2b1d85b1007a754daf6cab01/static/cp/learn/logic-lab/logic-gates/or-gate.png" alt="OR Gate" class="gate-image">
        <div class="gate-symbol">∨</div>
      </div>
      <div class="gate-info">
        <strong>Symbol:</strong> ∨ or +<br>
        <strong>Expression:</strong> Y = A+B or Y = A ∨ B<br>
        <strong>Operation:</strong> Output = 1 when AT LEAST ONE input = 1<br>
        <strong>Real-world analogy:</strong> Any switch can turn on light<br>
        <strong>Truth Table:</strong>
        <table class="mini-table">
          <tr><th>A</th><th>B</th><th>Y</th></tr>
          <tr><td>0</td><td>0</td><td>0</td></tr>
          <tr><td>0</td><td>1</td><td>1</td></tr>
          <tr><td>1</td><td>0</td><td>1</td></tr>
          <tr><td>1</td><td>1</td><td>1</td></tr>
        </table>
      </div>
    </div>

    <h4>NOT Gate (Inverter)</h4>
    <div class="logic-gate-with-image">
      <div class="gate-image-container">
        <img src="https://cdn.makecode.com/blob/7de0e3d95bd8d12dc009a8ac52ce40c4d2ca80ae/static/cp/learn/logic-lab/logic-gates/not-gate.png" alt="NOT Gate" class="gate-image">
        <div class="gate-symbol">¬</div>
      </div>
      <div class="gate-info">
        <strong>Symbol:</strong> ¬ or ' or ‾<br>
        <strong>Expression:</strong> Y = A' or Y = ¬A or Y = Ā<br>
        <strong>Operation:</strong> Output = OPPOSITE of input (0→1, 1→0)<br>
        <strong>Real-world analogy:</strong> Reverse gear in car<br>
        <strong>Truth Table:</strong>
        <table class="mini-table">
          <tr><th>A</th><th>Y</th></tr>
          <tr><td>0</td><td>1</td></tr>
          <tr><td>1</td><td>0</td></tr>
        </table>
      </div>
    </div>

    <h3>3. Universal Gates (Can create any gate)</h3>

    <h4>NAND Gate (NOT + AND)</h4>
    <div class="logic-gate-with-image">
      <div class="gate-image-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Nand-gate-en.svg/1000px-Nand-gate-en.svg.png?20060601183730" alt="NAND Gate" class="gate-image">
        <div class="gate-symbol">⊼</div>
      </div>
      <div class="gate-info">
        <strong>Symbol:</strong> ⊼<br>
        <strong>Expression:</strong> Y = (A·B)' or Y = ¬(A ∧ B)<br>
        <strong>Operation:</strong> Output = 0 ONLY when BOTH inputs = 1<br>
        <strong>Special:</strong> ✅ UNIVERSAL GATE<br>
        <strong>Real-world analogy:</strong> Guard who opens door unless both keys used<br>
        <strong>Truth Table:</strong>
        <table class="mini-table">
          <tr><th>A</th><th>B</th><th>Y</th></tr>
          <tr><td>0</td><td>0</td><td>1</td></tr>
          <tr><td>0</td><td>1</td><td>1</td></tr>
          <tr><td>1</td><td>0</td><td>1</td></tr>
          <tr><td>1</td><td>1</td><td>0</td></tr>
        </table>
      </div>
    </div>

    <h4>NOR Gate (NOT + OR)</h4>
    <div class="logic-gate-with-image">
      <div class="gate-image-container">
        <img src="https://images.wondershare.com/edrawmax/articles2025/logic-gate-symbols/nor-gate-symbol.png" alt="NOR Gate" class="gate-image">
        <div class="gate-symbol">⊽</div>
      </div>
      <div class="gate-info">
        <strong>Symbol:</strong> ⊽<br>
        <strong>Expression:</strong> Y = (A+B)' or Y = ¬(A ∨ B)<br>
        <strong>Operation:</strong> Output = 1 ONLY when BOTH inputs = 0<br>
        <strong>Special:</strong> ✅ UNIVERSAL GATE<br>
        <strong>Real-world analogy:</strong> System that only works when all switches are OFF<br>
        <strong>Truth Table:</strong>
        <table class="mini-table">
          <tr><th>A</th><th>B</th><th>Y</th></tr>
          <tr><td>0</td><td>0</td><td>1</td></tr>
          <tr><td>0</td><td>1</td><td>0</td></tr>
          <tr><td>1</td><td>0</td><td>0</td></tr>
          <tr><td>1</td><td>1</td><td>0</td></tr>
        </table>
      </div>
    </div>

    <h3>4. Special Gates</h3>

    <h4>XOR Gate (Exclusive OR)</h4>
    <div class="logic-gate-with-image">
      <div class="gate-image-container">
        <img src="https://cdn.makecode.com/blob/4266ce2da2a93cdeb4035e80fccea16ad651ca27/static/cp/learn/logic-lab/logic-gates/xor-gate.png" alt="XOR Gate" class="gate-image">
        <div class="gate-symbol">⊕</div>
      </div>
      <div class="gate-info">
        <strong>Symbol:</strong> ⊕<br>
        <strong>Expression:</strong> Y = A ⊕ B<br>
        <strong>Operation:</strong> Output = 1 when inputs are DIFFERENT<br>
        <strong>Difference from OR:</strong> XOR gives 0 when both inputs = 1<br>
        <strong>Real-world analogy:</strong> Two-way toggle switch<br>
        <strong>Truth Table:</strong>
        <table class="mini-table">
          <tr><th>A</th><th>B</th><th>Y</th></tr>
          <tr><td>0</td><td>0</td><td>0</td></tr>
          <tr><td>0</td><td>1</td><td>1</td></tr>
          <tr><td>1</td><td>0</td><td>1</td></tr>
          <tr><td>1</td><td>1</td><td>0</td></tr>
        </table>
      </div>
    </div>

    <h4>XNOR Gate (Exclusive NOR)</h4>
    <div class="logic-gate-with-image">
      <div class="gate-image-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Xnor-gate-en.svg/2560px-Xnor-gate-en.svg.png" alt="XNOR Gate" class="gate-image">
        <div class="gate-symbol">⊙</div>
      </div>
      <div class="gate-info">
        <strong>Symbol:</strong> ⊙<br>
        <strong>Expression:</strong> Y = (A ⊕ B)' or Y = A ⊙ B<br>
        <strong>Operation:</strong> Output = 1 when inputs are SAME<br>
        <strong>Note:</strong> Opposite of XOR gate<br>
        <strong>Real-world analogy:</strong> Matching lock - only opens when both keys match<br>
        <strong>Truth Table:</strong>
        <table class="mini-table">
          <tr><th>A</th><th>B</th><th>Y</th></tr>
          <tr><td>0</td><td>0</td><td>1</td></tr>
          <tr><td>0</td><td>1</td><td>0</td></tr>
          <tr><td>1</td><td>0</td><td>0</td></tr>
          <tr><td>1</td><td>1</td><td>1</td></tr>
        </table>
      </div>
    </div>

    <h3>5. Logic Gates Comparison Table</h3>
    <table class="comparison-table">
      <tr>
        <th>Gate</th>
        <th>Symbol</th>
        <th>Image</th>
        <th>Expression</th>
        <th>Output = 1 when</th>
        <th>Universal?</th>
      </tr>
      <tr>
        <td><strong>AND</strong></td>
        <td>∧</td>
        <td><img src="https://cdn.makecode.com/blob/b50209e493382b9e765c12c795ef05c5498e903b/static/cp/learn/logic-lab/logic-gates/and-gate.png" class="table-gate-image" alt="AND"></td>
        <td>Y = A·B</td>
        <td>BOTH = 1</td>
        <td>No</td>
      </tr>
      <tr>
        <td><strong>OR</strong></td>
        <td>∨</td>
        <td><img src="https://cdn.makecode.com/blob/e8c22cbac91ce65f2b1d85b1007a754daf6cab01/static/cp/learn/logic-lab/logic-gates/or-gate.png" class="table-gate-image" alt="OR"></td>
        <td>Y = A+B</td>
        <td>AT LEAST ONE = 1</td>
        <td>No</td>
      </tr>
      <tr>
        <td><strong>NOT</strong></td>
        <td>¬</td>
        <td><img src="https://cdn.makecode.com/blob/7de0e3d95bd8d12dc009a8ac52ce40c4d2ca80ae/static/cp/learn/logic-lab/logic-gates/not-gate.png" class="table-gate-image" alt="NOT"></td>
        <td>Y = A'</td>
        <td>Input = 0</td>
        <td>No</td>
      </tr>
      <tr>
        <td><strong>NAND</strong></td>
        <td>⊼</td>
        <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Nand-gate-en.svg/1000px-Nand-gate-en.svg.png?20060601183730" class="table-gate-image" alt="NAND"></td>
        <td>Y = (A·B)'</td>
        <td>NOT(BOTH = 1)</td>
        <td>✅ YES</td>
      </tr>
      <tr>
        <td><strong>NOR</strong></td>
        <td>⊽</td>
        <td><img src="https://images.wondershare.com/edrawmax/articles2025/logic-gate-symbols/nor-gate-symbol.png" class="table-gate-image" alt="NOR"></td>
        <td>Y = (A+B)'</td>
        <td>BOTH = 0</td>
        <td>✅ YES</td>
      </tr>
      <tr>
        <td><strong>XOR</strong></td>
        <td>⊕</td>
        <td><img src="https://cdn.makecode.com/blob/4266ce2da2a93cdeb4035e80fccea16ad651ca27/static/cp/learn/logic-lab/logic-gates/xor-gate.png" class="table-gate-image" alt="XOR"></td>
        <td>Y = A ⊕ B</td>
        <td>DIFFERENT inputs</td>
        <td>No</td>
      </tr>
      <tr>
        <td><strong>XNOR</strong></td>
        <td>⊙</td>
        <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Xnor-gate-en.svg/2560px-Xnor-gate-en.svg.png" class="table-gate-image" alt="XNOR"></td>
        <td>Y = (A ⊕ B)'</td>
        <td>SAME inputs</td>
        <td>No</td>
      </tr>
    </table>

    <h3>6. Boolean Algebra Laws</h3>
    <table class="comparison-table">
      <tr>
        <th>Law</th>
        <th>AND Form</th>
        <th>OR Form</th>
        <th>Example</th>
      </tr>
      <tr>
        <td><strong>Identity</strong></td>
        <td>A·1 = A</td>
        <td>A+0 = A</td>
        <td>A AND 1 = A</td>
      </tr>
      <tr>
        <td><strong>Null</strong></td>
        <td>A·0 = 0</td>
        <td>A+1 = 1</td>
        <td>A AND 0 = 0</td>
      </tr>
      <tr>
        <td><strong>Idempotent</strong></td>
        <td>A·A = A</td>
        <td>A+A = A</td>
        <td>A AND A = A</td>
      </tr>
      <tr>
        <td><strong>Inverse</strong></td>
        <td>A·A' = 0</td>
        <td>A+A' = 1</td>
        <td>A AND NOT A = 0</td>
      </tr>
      <tr>
        <td><strong>Commutative</strong></td>
        <td>A·B = B·A</td>
        <td>A+B = B+A</td>
        <td>A ∧ B = B ∧ A</td>
      </tr>
      <tr>
        <td><strong>De Morgan's</strong></td>
        <td>(A·B)' = A' + B'</td>
        <td>(A+B)' = A'·B'</td>
        <td>¬(A ∧ B) = ¬A ∨ ¬B</td>
      </tr>
    </table>

    <div class="highlight">
      <strong>🎯 CRITICAL EXAM POINTS:</strong><br>
      1. <strong>Universal Gates:</strong> NAND (⊼) and NOR (⊽) only<br>
      2. <strong>Truth Tables:</strong> MUST memorize all gates<br>
      3. <strong>Gate Symbols:</strong> Recognize images for each gate<br>
      4. <strong>De Morgan's Law:</strong> Most important theorem<br>
      5. <strong>Applications:</strong> Adders, multiplexers, CPUs<br>
      6. <strong>Remember:</strong> All gates work with binary (0/1) only
    </div>

    <h3>7. Memory Tricks & Applications</h3>
    <div class="memory-tricks">
      <div class="trick-card">
        <div class="trick-icon">🔑</div>
        <div class="trick-content">
          <strong>AND Gate:</strong> Both keys needed<br>
          <em>0×0=0, 0×1=0, 1×0=0, 1×1=1</em>
        </div>
      </div>
      <div class="trick-card">
        <div class="trick-icon">🚨</div>
        <div class="trick-content">
          <strong>OR Gate:</strong> Any alarm triggers<br>
          <em>0+0=0, 0+1=1, 1+0=1, 1+1=1</em>
        </div>
      </div>
      <div class="trick-card">
        <div class="trick-icon">🔄</div>
        <div class="trick-content">
          <strong>NOT Gate:</strong> Always opposite<br>
          <em>0→1, 1→0</em>
        </div>
      </div>
      <div class="trick-card">
        <div class="trick-icon">🏗️</div>
        <div class="trick-content">
          <strong>Universal Gates:</strong> Build any circuit<br>
          <em>NAND & NOR can create all gates</em>
        </div>
      </div>
    </div>

    <h3>8. Gate Combinations</h3>
    <div class="gate-combinations">
      <div class="combination">
        <span class="desc">AND + NOT = NAND</span>
         <span class="desc">OR + NOT = NOR</span>
        <span class="desc">XOR + NOT = XNOR</span>
      </div>
    </div>
  `
},


{
  id: "office-complete",
  title: "Microsoft Office Complete Guide",
  content: `
    <div class="office-guide">
      <h2>Microsoft Office Complete Guide</h2>
      
      <section class="main-section" id="ms-word">
        <h3>MS Word - Complete Guide</h3>
        
        <section class="sub-section">
          <h4>Introduction</h4>
          <ul>
            <li>Word Processing software from Microsoft Corporation</li>
            <li>Used for creating, editing, and formatting documents</li>
            <li>File extensions: .doc, .docx</li>
            <li>Default font: Calibri, size 11</li>
            <li>Font size range: Minimum 1, Maximum 1638 (manual entry)</li>
            <li>Default list shows sizes 8 to 72</li>
          </ul>
        </section>

        <section class="sub-section">
          <h4>Word Interface Components</h4>
          <ul>
            <li><strong>Quick Access Toolbar</strong> (Top-left): Save, Undo, Redo</li>
            <li><strong>Title Bar</strong>: Shows document name</li>
            <li><strong>Menu Bar/Tab Row</strong>: File, Home, Insert, Design, Layout, Mailings, Review, View</li>
            <li><strong>Ribbon</strong>: Shows options for selected tab</li>
            <li><strong>Status Bar</strong>: Page info, word count, zoom</li>
            <li><strong>Scroll Bars</strong>: Vertical and horizontal navigation</li>
            <li><strong>Document Area/Page</strong>: Main typing area</li>
          </ul>
        </section>

        <section class="sub-section">
          <h4>Important Tabs & Functions</h4>
          
          <section class="sub-sub-section">
            <h5>File Tab</h5>
            <ul>
              <li>New, Open, Save, Save As, Print, Share, Export, Close, Account</li>
              <li>Save As: Saves with different name/location</li>
            </ul>
          </section>

          <section class="sub-sub-section">
            <h5>Home Tab</h5>
            <ul>
              <li>Clipboard: Cut, Copy, Paste, Format Painter</li>
              <li>Font: Font type, size, bold, italic, underline, color</li>
              <li>Paragraph: Alignment, indents, spacing, bullets, numbering</li>
              <li>Styles: Heading styles, text formatting presets</li>
              <li>Editing: Find, Replace, Select</li>
            </ul>
          </section>

          <section class="sub-sub-section">
            <h5>Insert Tab</h5>
            <ul>
              <li>Pages: Cover Page, Blank Page, Page Break</li>
              <li>Tables: Insert table, draw table</li>
              <li>Illustrations: Pictures, Shapes, Icons, 3D Models, SmartArt, Chart</li>
              <li>Add-ins: Get Add-ins, My Add-ins</li>
              <li>Media: Online Video</li>
              <li>Links: Hyperlink, Bookmark, Cross-reference</li>
              <li>Comments: Insert comments</li>
              <li>Header & Footer: Header, Footer, Page Number</li>
              <li>Text: Text Box, WordArt, Drop Cap, Signature Line, Date & Time</li>
              <li>Symbols: Equation, Symbol</li>
            </ul>
          </section>

          <section class="sub-sub-section">
            <h5>Design Tab</h5>
            <ul>
              <li>Themes: Pre-designed themes</li>
              <li>Document Formatting: Styles, colors, fonts, spacing</li>
              <li>Page Background: Watermark, Page Color, Page Borders</li>
            </ul>
          </section>

          <section class="sub-sub-section">
            <h5>Layout Tab</h5>
            <ul>
              <li>Page Setup: Margins, Orientation (Portrait/Landscape), Size, Columns</li>
              <li>Paragraph: Indents, Spacing</li>
              <li>Arrange: Position, Wrap Text, Bring Forward, Send Backward</li>
            </ul>
          </section>

          <section class="sub-sub-section">
            <h5>Mailings Tab</h5>
            <ul>
              <li>Mail Merge: Create letters, envelopes, labels, directory</li>
              <li>Start Mail Merge: Select document type</li>
              <li>Select Recipients: Use existing list, create new list</li>
              <li>Edit Recipient List: Filter and sort recipients</li>
              <li>Write & Insert Fields: Address block, greeting line, merge fields</li>
              <li>Preview Results: Check before merging</li>
              <li>Finish: Complete the merge</li>
            </ul>
          </section>

          <section class="sub-sub-section">
            <h5>Review Tab</h5>
            <ul>
              <li>Proofing: Spelling & Grammar, Thesaurus, Word Count</li>
              <li>Language: Translate, Language settings</li>
              <li>Comments: New comment, delete, navigate comments</li>
              <li>Tracking: Track Changes, Show Markup</li>
              <li>Changes: Accept, reject changes</li>
              <li>Compare: Compare documents, combine</li>
              <li>Protect: Restrict editing, block authors</li>
            </ul>
          </section>

          <section class="sub-sub-section">
            <h5>View Tab</h5>
            <ul>
              <li>Views: Read Mode, Print Layout, Web Layout, Outline, Draft</li>
              <li>Zoom: Zoom level, one page, multiple pages</li>
              <li>Window: New Window, Arrange All, Split</li>
              <li>Macros: View, record macros</li>
            </ul>
          </section>
        </section>

        <section class="sub-section">
          <h4>Key Features & Functions</h4>
          <ul>
            <li><strong>Headers & Footers</strong>: Information at top/bottom of every page (titles, page numbers)</li>
            <li><strong>Hyperlinks</strong>: Ctrl+K to insert links to webpages or documents</li>
            <li><strong>Drop Cap</strong>: Large initial letter at paragraph start</li>
            <li><strong>Watermark</strong>: Background text like "CONFIDENTIAL"</li>
            <li><strong>Macros</strong>: Record series of commands for repetitive tasks</li>
            <li><strong>Table of Contents</strong>: Automatic generation from headings</li>
            <li><strong>Mail Merge</strong>: Merge main document with data source (address list)</li>
            <li><strong>Track Changes</strong>: Shows edits made by different users</li>
            <li><strong>Thesaurus</strong>: Find synonyms and antonyms</li>
            <li><strong>Word Count</strong>: Counts words, characters, paragraphs</li>
          </ul>
        </section>

        <section class="sub-section">
          <h4>Important Word Shortcuts</h4>
          <div class="shortcuts-container">
            <section class="shortcut-category">
              <h5>Basic Operations</h5>
              <ul>
                <li>Ctrl+S: Save</li>
                <li>Ctrl+C: Copy</li>
                <li>Ctrl+V: Paste</li>
                <li>Ctrl+X: Cut</li>
                <li>Ctrl+Z: Undo</li>
                <li>Ctrl+Y: Redo</li>
                <li>Ctrl+N: New document</li>
                <li>Ctrl+O: Open document</li>
                <li>Ctrl+P: Print</li>
                <li>Ctrl+A: Select all</li>
                <li>Ctrl+W: Close document (not Word)</li>
                <li>Alt+F4: Close Word application</li>
              </ul>
            </section>

            <section class="shortcut-category">
              <h5>Formatting Shortcuts</h5>
              <ul>
                <li>Ctrl+B: Bold</li>
                <li>Ctrl+I: Italic</li>
                <li>Ctrl+U: Underline</li>
                <li>Ctrl+L: Left align</li>
                <li>Ctrl+E: Center align</li>
                <li>Ctrl+R: Right align</li>
                <li>Ctrl+J: Justify align</li>
                <li>Ctrl+K: Insert hyperlink</li>
                <li>Ctrl+F1: Show/hide ribbon</li>
              </ul>
            </section>

            <section class="shortcut-category">
              <h5>Navigation & Editing</h5>
              <ul>
                <li>Ctrl+F: Find</li>
                <li>Ctrl+H: Replace</li>
                <li>Ctrl+Home: Go to document beginning</li>
                <li>Ctrl+End: Go to document end</li>
                <li>Ctrl+Enter: Insert page break</li>
                <li>Shift+F3: Change case</li>
                <li>F7: Spelling & grammar check</li>
                <li>F12: Save As</li>
                <li>Double-click word: Select word</li>
                <li>Triple-click paragraph: Select paragraph</li>
                <li>Ctrl+Backspace: Delete entire word left</li>
                <li>Ctrl+Delete: Delete entire word right</li>
              </ul>
            </section>

            <section class="shortcut-category">
              <h5>Spacing & Font Size</h5>
              <ul>
                <li>Ctrl+1: Single line spacing</li>
                <li>Ctrl+2: Double line spacing</li>
                <li>Ctrl+5: 1.5 line spacing</li>
                <li>Ctrl+0: Remove paragraph spacing</li>
                <li>Ctrl+Shift+&gt;: Increase font size</li>
                <li>Ctrl+Shift+&lt;: Decrease font size</li>
                <li>Ctrl+]: Increase font size by 1pt</li>
                <li>Ctrl+[: Decrease font size by 1pt</li>
                <li>Ctrl+Shift++: Superscript</li>
                <li>Ctrl++: Subscript (without Shift)</li>
              </ul>
            </section>
          </div>
        </section>

        <section class="sub-section">
          <h4>Formatting & Editing</h4>
          <ul>
            <li><strong>Editing</strong>: Changing data/content values</li>
            <li><strong>Formatting</strong>: Changing appearance (font, size, alignment)</li>
            <li><strong>Alignment Types</strong>:
              <section class="alignment-types">
                <ul>
                  <li>Left: Default for text</li>
                  <li>Right: Default for numbers</li>
                  <li>Center: For headings/titles</li>
                  <li>Justified: Even margins on both sides (official letters)</li>
                </ul>
              </section>
            </li>
            <li><strong>Indentation</strong>: Space from margin to text start</li>
            <li><strong>Line Spacing</strong>: Space between lines</li>
            <li><strong>Paragraph Spacing</strong>: Space before/after paragraphs</li>
            <li><strong>Bullets & Numbering</strong>: Lists</li>
            <li><strong>Borders & Shading</strong>: Add borders to text/pages</li>
          </ul>
        </section>

        <section class="sub-section">
          <h4>Document Elements</h4>
          <ul>
            <li><strong>Margins</strong>: Space around page edges</li>
            <li><strong>Gutter Margin</strong>: Extra margin for binding</li>
            <li><strong>Columns</strong>: Multiple text columns (like newspapers)</li>
            <li><strong>Section Breaks</strong>: Divide document into sections with different formatting</li>
            <li><strong>Page Breaks</strong>: Force new page</li>
            <li><strong>Column Breaks</strong>: Force new column</li>
          </ul>
        </section>

        <section class="sub-section">
          <h4>Special Features</h4>
          <ul>
            <li><strong>Maximum columns in table</strong>: 63</li>
            <li><strong>Zoom range</strong>: Minimum 10%, Maximum 500%</li>
            <li><strong>Superscript</strong>: Ctrl+Shift++ (e.g., x²)</li>
            <li><strong>Subscript</strong>: Ctrl++ (e.g., x₂)</li>
            <li><strong>Thesaurus shortcut</strong>: Shift+F7</li>
            <li><strong>Word count display</strong>: Status bar</li>
          </ul>
        </section>
      </section>

      <section class="main-section" id="ms-excel">
        <h3>MS Excel - Complete Guide</h3>
        
        <section class="sub-section">
          <h4>Introduction</h4>
          <ul>
            <li>Spreadsheet application developed by Microsoft Corporation</li>
            <li>Used for numerical data, calculations, charts, data analysis</li>
            <li>File extensions: .xls, .xlsx</li>
            <li>Programming language: Visual Basic for Applications (VBA)</li>
            <li>Default font: Calibri, size 11</li>
            <li>Default alignment: Text → Left, Numbers → Right</li>
          </ul>
        </section>

        <section class="sub-section">
          <h4>Excel Interface Components</h4>
          <ul>
            <li><strong>Cell</strong>: Intersection of row and column (e.g., A1)</li>
            <li><strong>Active Cell</strong>: Currently selected cell with thick border</li>
            <li><strong>Formula Bar</strong>: Shows content/formula of active cell</li>
            <li><strong>Row</strong>: Horizontal, numbered (1, 2, 3...)</li>
            <li><strong>Column</strong>: Vertical, lettered (A, B, C...)</li>
            <li><strong>Worksheet</strong>: Single sheet containing cells</li>
            <li><strong>Workbook</strong>: File containing multiple worksheets</li>
            <li><strong>Name Box</strong>: Shows address of active cell</li>
            <li><strong>Sheet Tabs</strong>: Tabs at bottom for different worksheets</li>
          </ul>
        </section>

        <section class="sub-section">
          <h4>Worksheet Specifications</h4>
          <ul>
            <li>Maximum rows: 1,048,576 (Excel 2010+)</li>
            <li>Maximum columns: 16,384 (Excel 2010+)</li>
            <li>Maximum worksheets per workbook: 255</li>
            <li>Default worksheets in new workbook: 3</li>
            <li>Character limit per cell: 32,767 characters</li>
            <li>Font size range: 1-409 (manual entry)</li>
            <li>Default shows 8-72 in list</li>
          </ul>
        </section>

        <section class="sub-section">
          <h4>Cell Referencing</h4>
          <ul>
            <li><strong>Relative Reference</strong> (A1): Changes when copied</li>
            <li><strong>Absolute Reference</strong> ($A$1): Never changes (fixed with $)</li>
            <li><strong>Mixed Reference</strong>:
              <section class="mixed-reference">
                <ul>
                  <li>$A1: Column fixed, row changes</li>
                  <li>A$1: Row fixed, column changes</li>
                </ul>
              </section>
            </li>
          </ul>
        </section>

        <section class="sub-section">
          <h4>Important Excel Functions</h4>
          
          <section class="function-category">
            <h5>Math Functions</h5>
            <ul>
              <li>=SUM(): Adds numbers</li>
              <li>=AVERAGE(): Calculates mean</li>
              <li>=MAX(), =MIN(): Highest/lowest value</li>
              <li>=COUNT(): Counts cells with numbers</li>
              <li>=COUNTA(): Counts non-empty cells</li>
              <li>=COUNTIF(): Counts with condition</li>
              <li>=SUMIF(): Sums with condition</li>
              <li>=PRODUCT(): Multiplies numbers</li>
              <li>=MOD(): Returns remainder</li>
              <li>=ABS(): Absolute value</li>
              <li>=SQRT(): Square root</li>
              <li>=POWER(): Raises number to power</li>
              <li>=ROUND(): Rounds to specified decimals</li>
              <li>=FLOOR(): Rounds down to nearest multiple</li>
              <li>=CEILING(): Rounds up to nearest multiple</li>
              <li>=EVEN(), =ODD(): Rounds to even/odd number</li>
            </ul>
          </section>

          <section class="function-category">
            <h5>Logical Functions</h5>
            <ul>
              <li>=IF(): Returns value based on condition</li>
              <li>=AND(): TRUE if all conditions true</li>
              <li>=OR(): TRUE if any condition true</li>
              <li>=NOT(): Returns opposite logical value</li>
            </ul>
          </section>

          <section class="function-category">
            <h5>Text Functions</h5>
            <ul>
              <li>=LOWER(): Converts to lowercase</li>
              <li>=UPPER(): Converts to uppercase</li>
              <li>=PROPER(): Capitalizes first letter of each word</li>
              <li>=CONCATENATE() or &: Joins text</li>
              <li>=LEFT(): Extracts left characters</li>
              <li>=RIGHT(): Extracts right characters</li>
              <li>=LEN(): Counts characters</li>
              <li>=TRIM(): Removes extra spaces</li>
            </ul>
          </section>

          <section class="function-category">
            <h5>Date & Time Functions</h5>
            <ul>
              <li>=TODAY(): Current date</li>
              <li>=NOW(): Current date and time</li>
              <li>=DATE(): Creates date from year, month, day</li>
              <li>=TIME(): Creates time from hour, minute, second</li>
              <li>=DAY(), =MONTH(), =YEAR(): Extracts date parts</li>
            </ul>
          </section>

          <section class="function-category">
            <h5>Lookup Functions</h5>
            <ul>
              <li>=VLOOKUP(): Vertical lookup</li>
              <li>=HLOOKUP(): Horizontal lookup</li>
              <li>=INDEX(): Returns value at intersection</li>
              <li>=MATCH(): Returns position of item</li>
            </ul>
          </section>

          <section class="function-category">
            <h5>Other Functions</h5>
            <ul>
              <li>=EXACT(): Checks exact match</li>
              <li>=ISNUMBER(): Checks if value is number</li>
              <li>=ISTEXT(): Checks if value is text</li>
            </ul>
          </section>
        </section>

        <section class="sub-section">
          <h4>Important Excel Shortcuts</h4>
          
          <section class="shortcut-category">
            <h5>Navigation</h5>
            <ul>
              <li>Ctrl+Arrow keys: Move to edge of data region</li>
              <li>Ctrl+Home: Go to A1</li>
              <li>Ctrl+End: Go to last used cell</li>
              <li>Page Up/Down: Move one screen up/down</li>
              <li>Alt+Page Up/Down: Move one screen left/right</li>
            </ul>
          </section>

          <section class="shortcut-category">
            <h5>Selection</h5>
            <ul>
              <li>Ctrl+A: Select entire worksheet</li>
              <li>Ctrl+Space: Select entire column</li>
              <li>Shift+Space: Select entire row</li>
              <li>Shift+Arrow keys: Extend selection</li>
              <li>Ctrl+Shift+Arrow keys: Extend selection to edge</li>
            </ul>
          </section>

          <section class="shortcut-category">
            <h5>Editing</h5>
            <ul>
              <li>F2: Edit active cell</li>
              <li>Ctrl+Enter: Fill selected cells with same data</li>
              <li>Alt+Enter: New line within same cell</li>
              <li>Ctrl+D: Fill down (copy from cell above)</li>
              <li>Ctrl+R: Fill right (copy from cell left)</li>
              <li>Ctrl+;: Insert current date</li>
              <li>Ctrl+Shift+;: Insert current time</li>
              <li>Ctrl+Shift+": Copy value from cell above</li>
            </ul>
          </section>

          <section class="shortcut-category">
            <h5>Formatting</h5>
            <ul>
              <li>Ctrl+1: Format Cells dialog</li>
              <li>Ctrl+B: Bold</li>
              <li>Ctrl+I: Italic</li>
              <li>Ctrl+U: Underline</li>
              <li>Ctrl+5: Strikethrough</li>
            </ul>
          </section>

          <section class="shortcut-category">
            <h5>Worksheet Management</h5>
            <ul>
              <li>Shift+F11: Insert new worksheet</li>
              <li>Ctrl+Page Up/Down: Move between worksheets</li>
              <li>Alt+O+H+R: Rename worksheet</li>
            </ul>
          </section>

          <section class="shortcut-category">
            <h5>Other</h5>
            <ul>
              <li>Ctrl+0: Hide column</li>
              <li>Ctrl+9: Hide row</li>
              <li>Ctrl+Shift+0: Unhide column</li>
              <li>Ctrl+Shift+9: Unhide row</li>
              <li>Ctrl+F: Find</li>
              <li>Ctrl+H: Replace</li>
              <li>Ctrl+G or F5: Go To</li>
              <li>F4: Repeat last action or toggle absolute/relative reference</li>
              <li>F7: Spelling check</li>
              <li>F9: Calculate all worksheets</li>
              <li>Shift+F9: Calculate active worksheet</li>
              <li>Ctrl+F3: Define name</li>
              <li>Ctrl+Shift+F3: Create names from selection</li>
              <li>Ctrl+Shift+L: Toggle filters</li>
              <li>Alt+=: AutoSum</li>
              <li>Ctrl+Shift+~: General number format</li>
              <li>Ctrl+Shift+$: Currency format</li>
              <li>Ctrl+Shift+%: Percentage format</li>
              <li>Ctrl+Shift+#: Date format</li>
              <li>Ctrl+Shift+@: Time format</li>
            </ul>
          </section>
        </section>

        <section class="sub-section">
          <h4>Excel Features</h4>
          <ul>
            <li><strong>Filters</strong>: Sort and filter data</li>
            <li><strong>Charts</strong>: Column, Line, Pie, Bar, Area, Scatter charts</li>
            <li><strong>PivotTables</strong>: Summarize and analyze data</li>
            <li><strong>Data Validation</strong>: Restrict data entry</li>
            <li><strong>Conditional Formatting</strong>: Format cells based on conditions</li>
            <li><strong>Freeze Panes</strong>: Keep rows/columns visible while scrolling</li>
            <li><strong>Split</strong>: Divide window into panes</li>
            <li><strong>Formulas</strong>: Start with = sign</li>
            <li><strong>Functions</strong>: Predefined formulas</li>
            <li><strong>AutoFill</strong>: Fill series or copy formulas</li>
            <li><strong>Flash Fill</strong>: Automatically fill data based on pattern</li>
          </ul>
        </section>
      </section>

      <section class="main-section" id="ms-powerpoint">
        <h3>MS PowerPoint - Complete Guide</h3>
        
        <section class="sub-section">
          <h4>Introduction</h4>
          <ul>
            <li>Presentation software from Microsoft Office</li>
            <li>Used for creating slideshows with text, images, multimedia</li>
            <li>File extensions: .ppt, .pptx</li>
            <li>Graphical approach for visual presentations</li>
          </ul>
        </section>

        <section class="sub-section">
          <h4>PowerPoint Interface Components</h4>
          <ul>
            <li><strong>Slide</strong>: Individual page in presentation</li>
            <li><strong>Slide Pane</strong>: Main area for editing slides</li>
            <li><strong>Notes Pane</strong>: Area for speaker notes</li>
            <li><strong>Slide Thumbnails</strong>: Miniature views of slides</li>
            <li><strong>Outline View</strong>: Text content in outline form</li>
            <li><strong>Slide Sorter</strong>: View all slides as thumbnails</li>
          </ul>
        </section>

        <section class="sub-section">
          <h4>Important Tabs & Functions</h4>
          
          <section class="sub-sub-section">
            <h5>Home Tab</h5>
            <ul>
              <li>New Slide, Layout, Reset, Section</li>
              <li>Clipboard: Cut, Copy, Paste, Format Painter</li>
              <li>Slides: New slide, slide layout, reset, section</li>
              <li>Font: Font type, size, style, color</li>
              <li>Paragraph: Alignment, lists, spacing, columns</li>
              <li>Drawing: Shapes, arrange, quick styles</li>
              <li>Editing: Find, Replace, Select</li>
            </ul>
          </section>

          <section class="sub-sub-section">
            <h5>Insert Tab</h5>
            <ul>
              <li>Tables: Insert table</li>
              <li>Images: Pictures, Online Pictures, Screenshot, Photo Album</li>
              <li>Illustrations: Shapes, Icons, 3D Models, SmartArt, Chart</li>
              <li>Add-ins: Get Add-ins</li>
              <li>Links: Hyperlink, Action</li>
              <li>Comments: New comment</li>
              <li>Text: Text Box, Header & Footer, WordArt, Date & Time, Slide Number, Object</li>
              <li>Symbols: Equation, Symbol</li>
              <li>Media: Video, Audio, Screen Recording</li>
            </ul>
          </section>

          <section class="sub-sub-section">
            <h5>Design Tab</h5>
            <ul>
              <li>Themes: Pre-designed themes</li>
              <li>Variants: Color variations of themes</li>
              <li>Customize: Slide size, format background</li>
            </ul>
          </section>

          <section class="sub-sub-section">
            <h5>Transitions Tab</h5>
            <ul>
              <li>Transition to This Slide: Different transition effects</li>
              <li>Timing: Duration, sound, advance slide</li>
            </ul>
          </section>

          <section class="sub-sub-section">
            <h5>Animations Tab</h5>
            <ul>
              <li>Animation Styles: Entrance, emphasis, exit, motion paths</li>
              <li>Timing: Start, duration, delay, reorder</li>
              <li>Advanced Animation: Add animation, animation pane, trigger</li>
            </ul>
          </section>

          <section class="sub-sub-section">
            <h5>Slide Show Tab</h5>
            <ul>
              <li>Start Slide Show: From beginning, from current slide</li>
              <li>Set Up: Set up slide show, rehearse timings, record slide show</li>
              <li>Monitors: Presenter view, monitor selection</li>
            </ul>
          </section>

          <section class="sub-sub-section">
            <h5>Review Tab</h5>
            <ul>
              <li>Proofing: Spelling, thesaurus, research</li>
              <li>Language: Translate, language</li>
              <li>Comments: New, delete, navigate comments</li>
              <li>Compare: Compare presentations</li>
            </ul>
          </section>

          <section class="sub-sub-section">
            <h5>View Tab</h5>
            <ul>
              <li>Presentation Views: Normal, Outline, Slide Sorter, Notes Page, Reading View</li>
              <li>Master Views: Slide Master, Handout Master, Notes Master</li>
              <li>Show: Ruler, gridlines, guides, notes</li>
              <li>Zoom: Zoom level, fit to window</li>
              <li>Color/Grayscale: Color, grayscale, black and white</li>
              <li>Window: New window, arrange, cascade, switch windows</li>
              <li>Macros: View macros</li>
            </ul>
          </section>
        </section>

        <section class="sub-section">
          <h4>Important PowerPoint Shortcuts</h4>
          <div class="shortcuts-container">
            <section class="shortcut-category">
              <h5>Presentation Control</h5>
              <ul>
                <li>F5: Start slideshow from beginning</li>
                <li>Shift+F5: Start from current slide</li>
                <li>Esc: End slideshow</li>
                <li>Number+Enter: Go to slide number</li>
                <li>B or .: Black screen during presentation</li>
                <li>W or ,: White screen during presentation</li>
                <li>S: Stop/restart slideshow</li>
                <li>E: Erase drawing during presentation</li>
                <li>H: Go to hidden slide</li>
              </ul>
            </section>

            <section class="shortcut-category">
              <h5>Slide Management</h5>
              <ul>
                <li>Ctrl+M: Insert new slide</li>
                <li>Ctrl+D: Duplicate slide/object</li>
                <li>Page Down/Right Arrow: Next slide</li>
                <li>Page Up/Left Arrow: Previous slide</li>
              </ul>
            </section>

            <section class="shortcut-category">
              <h5>Basic Operations</h5>
              <ul>
                <li>Ctrl+N: New presentation</li>
                <li>Ctrl+O: Open presentation</li>
                <li>Ctrl+S: Save presentation</li>
                <li>Ctrl+P: Print</li>
                <li>Ctrl+Z: Undo</li>
                <li>Ctrl+Y: Redo</li>
                <li>Ctrl+C: Copy</li>
                <li>Ctrl+V: Paste</li>
                <li>Ctrl+X: Cut</li>
                <li>Ctrl+A: Select all</li>
              </ul>
            </section>

            <section class="shortcut-category">
              <h5>Formatting</h5>
              <ul>
                <li>Ctrl+B: Bold</li>
                <li>Ctrl+I: Italic</li>
                <li>Ctrl+U: Underline</li>
                <li>Ctrl+E: Center align</li>
                <li>Ctrl+L: Left align</li>
                <li>Ctrl+R: Right align</li>
                <li>Ctrl+[: Decrease font size</li>
                <li>Ctrl+]: Increase font size</li>
                <li>Ctrl+Shift+&gt;: Increase font size more</li>
                <li>Ctrl+Shift+&lt;: Decrease font size more</li>
                <li>Ctrl+F: Find</li>
                <li>Ctrl+H: Replace</li>
                <li>Ctrl+K: Insert hyperlink</li>
                <li>Ctrl+T: Font dialog</li>
              </ul>
            </section>
          </div>
        </section>

        <section class="sub-section">
          <h4>Presentation Views</h4>
          <ul>
            <li><strong>Normal View</strong>: Default editing view</li>
            <li><strong>Outline View</strong>: Shows text content in outline</li>
            <li><strong>Slide Sorter</strong>: Thumbnails of all slides</li>
            <li><strong>Notes Page</strong>: Slide with speaker notes</li>
            <li><strong>Reading View</strong>: Full-screen view without presenter tools</li>
            <li><strong>Slide Show</strong>: Full-screen presentation mode</li>
          </ul>
        </section>

        <section class="sub-section">
          <h4>PowerPoint Features</h4>
          <ul>
            <li><strong>Slide Layouts</strong>: Title slide, title and content, section header, etc.</li>
            <li><strong>Themes</strong>: Pre-designed color/font schemes</li>
            <li><strong>Transitions</strong>: Effects between slides</li>
            <li><strong>Animations</strong>: Effects on slide elements</li>
            <li><strong>SmartArt</strong>: Visual diagrams</li>
            <li><strong>Charts</strong>: Graphical data representation</li>
            <li><strong>Multimedia</strong>: Audio, video insertion</li>
            <li><strong>Action Buttons</strong>: Interactive buttons</li>
            <li><strong>Hyperlinks</strong>: Links to slides, files, webpages</li>
            <li><strong>Presenter View</strong>: Special view for presenters with notes and timer</li>
            <li><strong>Rehearse Timings</strong>: Practice and set slide timings</li>
            <li><strong>Record Slide Show</strong>: Record narration and timings</li>
            <li><strong>Slide Master</strong>: Global formatting for all slides</li>
            <li><strong>Handouts</strong>: Print multiple slides per page</li>
            <li><strong>Notes</strong>: Speaker notes for each slide</li>
          </ul>
        </section>
      </section>

      <section class="main-section" id="ms-access">
        <h3>MS Access - Complete Guide</h3>
        
        <section class="sub-section">
          <h4>Introduction</h4>
          <ul>
            <li>Database management system from Microsoft Office</li>
            <li>Used for storing, managing, and linking large datasets</li>
            <li>File extensions: .mdb, .accdb</li>
            <li>Manages related data (e.g., salary systems, inventories)</li>
          </ul>
        </section>

        <section class="sub-section">
          <h4>Access Components</h4>
          <ul>
            <li><strong>Tables</strong>: Store data in rows and columns</li>
            <li><strong>Queries</strong>: Retrieve and manipulate data</li>
            <li><strong>Forms</strong>: User interface for data entry</li>
            <li><strong>Reports</strong>: Present data in formatted manner</li>
            <li><strong>Macros</strong>: Automate tasks</li>
            <li><strong>Modules</strong>: VBA programming code</li>
          </ul>
        </section>

        <section class="sub-section">
          <h4>Key Features</h4>
          <ul>
            <li><strong>Relational Database</strong>: Links data between tables</li>
            <li><strong>Data Validation</strong>: Ensures data accuracy</li>
            <li><strong>Forms & Reports</strong>: User-friendly data interaction</li>
            <li><strong>Query Wizard</strong>: Easy query creation</li>
            <li><strong>Import/Export</strong>: Exchange data with other applications</li>
            <li><strong>Security</strong>: User-level security features</li>
          </ul>
        </section>
      </section>

      <section class="main-section" id="other-apps">
        <h3>Other Microsoft Office Applications</h3>
        
        <section class="sub-section">
          <h4>MS Publisher - Overview</h4>
          <ul>
            <li>Desktop publishing software</li>
            <li>Used for creating brochures, newsletters, magazines</li>
            <li>Professional print material design</li>
            <li>Layout and formatting for printed materials</li>
          </ul>
        </section>

        <section class="sub-section">
          <h4>MS Outlook - Overview</h4>
          <ul>
            <li>Email client software</li>
            <li>Used for sending and receiving emails</li>
            <li>Part of Microsoft Office suite</li>
            <li>Alternative to webmail services like Gmail</li>
          </ul>
        </section>
      </section>

      <section class="main-section" id="general-info">
        <h3>General MS Office Information</h3>
        
        <section class="sub-section">
          <h4>Versions History</h4>
          <ul>
            <li>2003: First major version (4-year gap from previous)</li>
            <li>2007: Ribbon interface introduced</li>
            <li>2010, 2013, 2016, 2019: 3-year release cycles</li>
            <li>Office 365: Subscription-based, cloud-integrated</li>
            <li>Most used version: Office 2016</li>
          </ul>
        </section>

        <section class="sub-section">
          <h4>Office 365 Features</h4>
          <ul>
            <li>Subscription-based model</li>
            <li>Cloud integration (OneDrive)</li>
            <li>Real-time collaboration</li>
            <li>Continuous updates</li>
            <li>Access from multiple devices</li>
            <li>Data stored in cloud</li>
          </ul>
        </section>

        <section class="sub-section">
          <h4>Common Office Features</h4>
          
          <section class="sub-sub-section">
            <h5>Ribbon Interface</h5>
            <ul>
              <li>Introduced in Office 2007</li>
              <li>Replaced traditional menus and toolbars</li>
            </ul>
          </section>

          <section class="sub-sub-section">
            <h5>File Formats</h5>
            <ul>
              <li><strong>Word:</strong> .doc, .docx</li>
              <li><strong>Excel:</strong> .xls, .xlsx</li>
              <li><strong>PowerPoint:</strong> .ppt, .pptx</li>
              <li><strong>Access:</strong> .mdb, .accdb</li>
            </ul>
          </section>

          <section class="sub-sub-section">
            <h5>Common Shortcuts</h5>
            <div class="shortcuts-container">
              <section class="shortcut-category">
                <h6>Universal Shortcuts</h6>
                <ul>
                  <li>Ctrl+S: Save</li>
                  <li>Ctrl+C: Copy</li>
                  <li>Ctrl+V: Paste</li>
                  <li>Ctrl+X: Cut</li>
                  <li>Ctrl+Z: Undo</li>
                  <li>Ctrl+Y: Redo</li>
                  <li>Ctrl+P: Print</li>
                  <li>Ctrl+F: Find</li>
                  <li>Ctrl+H: Replace</li>
                  <li>Ctrl+N: New</li>
                </ul>
              </section>

              <section class="shortcut-category">
                <h6>Application Control</h6>
                <ul>
                  <li>Ctrl+O: Open</li>
                  <li>Ctrl+W: Close window/document</li>
                  <li>Alt+F4: Close application</li>
                  <li>F1: Help</li>
                  <li>F12: Save As</li>
                </ul>
              </section>
            </div>
          </section>
        </section>
      </section>
    </div>

    <style>
    .office-guide {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
    }
    
    .main-section {
      margin: 40px 0;
      padding: 25px;
      background: #f9f9f9;
      border-radius: 8px;
      border-left: 5px solid #2b579a;
    }
    
    .main-section h3 {
      color: #2b579a;
      margin-top: 0;
      padding-bottom: 10px;
      border-bottom: 2px solid #eaeaea;
      font-size: 1.8em;
    }
    
    .sub-section {
      margin: 25px 0;
      padding: 20px;
      background: white;
      border-radius: 6px;
      border: 1px solid #eaeaea;
    }
    
    .sub-section h4 {
      color: #444;
      margin-top: 0;
      font-size: 1.4em;
    }
    
    .sub-sub-section {
      margin: 15px 0;
      padding: 15px;
      background: #f8f9fa;
      border-radius: 4px;
      border-left: 3px solid #5d9cec;
    }
    
    .sub-sub-section h5 {
      color: #555;
      margin-top: 0;
      font-size: 1.2em;
    }
    
    .function-category,
    .shortcut-category {
      margin: 15px 0;
      padding: 15px;
      background: #f8f9fa;
      border-radius: 4px;
    }
    
    .shortcuts-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 15px;
    }
    
    ul {
      padding-left: 20px;
    }
    
    li {
      margin-bottom: 8px;
    }
    
    strong {
      color: #2b579a;
    }
    
    @media (max-width: 768px) {
      .main-section {
        padding: 15px;
        margin: 20px 0;
      }
      
      .sub-section {
        padding: 15px;
      }
      
      .shortcuts-container {
        grid-template-columns: 1fr;
      }
    }
    </style>
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
          <td>Direct To Home</td>
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

      <h3>Computer Codes (NEW from Video)</h3>
      <table class="comparison-table">
        <tr>
          <th>Abbr</th>
          <th>Full Form</th>
          <th>Key Feature</th>
        </tr>
        <tr>
          <td>BCD</td>
          <td>Binary Coded Decimal</td>
          <td>4 bits per decimal digit (IBM)</td>
        </tr>
        <tr>
          <td>ASCII</td>
          <td>American Standard Code for Information Interchange</td>
          <td>7-bit (128 chars) or 8-bit (256 chars)</td>
        </tr>
        <tr>
          <td>EBCDIC</td>
          <td>Extended Binary Coded Decimal Interchange Code</td>
          <td>8-bit code (256 characters)</td>
        </tr>
      </table>
      `
  },
];
