import { useState } from "react";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "/components/ui/card";
import { Button } from "/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "/components/ui/tabs";
import { Slider } from "/components/ui/slider";
import { Badge } from "/components/ui/badge";
import { 
  ArrowLeftRight, 
  Bed, 
  BookOpen, 
  ChevronRight, 
  Coffee, 
  Cog, 
  Home, 
  Layers, 
  Maximize, 
  Minimize, 
  Palette, 
  Save, 
  Sofa
} from "lucide-react";

export default function ModularFurnitureSystem() {
  const [activeConfiguration, setActiveConfiguration] = useState("bed");
  const [colorScheme, setColorScheme] = useState("natural");
  const [spaceEfficiency, setSpaceEfficiency] = useState(70);
  const [selectedAddOn, setSelectedAddOn] = useState(null);
  
  const colorSchemes = {
    natural: {
      primary: "#D2B48C",
      secondary: "#A67C52",
      accent: "#8B4513",
      light: "#F5F5DC"
    },
    modern: {
      primary: "#808080",
      secondary: "#505050",
      accent: "#303030",
      light: "#E0E0E0"
    },
    vibrant: {
      primary: "#4682B4",
      secondary: "#20B2AA",
      accent: "#FF6347",
      light: "#F0F8FF"
    }
  };
  
  const colors = colorSchemes[colorScheme];
  
  const configurations = {
    bed: {
      title: "Sleep Configuration",
      description: "Transform the modular system into a comfortable bed with integrated storage",
      icon: <Bed size={24} />,
      benefits: ["Maximizes floor space during the day", "Hidden storage under mattress", "Folds away when not in use"],
      modules: ["Base Frame", "Mattress Support", "Storage Drawers", "Headboard/Shelf"]
    },
    desk: {
      title: "Study Configuration",
      description: "A spacious desk with adjustable height and built-in organization",
      icon: <BookOpen size={24} />,
      benefits: ["Adjustable height for ergonomic comfort", "Cable management system", "Integrated lighting options"],
      modules: ["Base Frame", "Desk Surface", "Shelf Attachments", "Organization Grid"]
    },
    storage: {
      title: "Storage Configuration",
      description: "Maximize your storage with customizable shelving and compartments",
      icon: <Layers size={24} />,
      benefits: ["Modular compartments for different items", "Adjustable shelf heights", "Lockable sections for valuables"],
      modules: ["Base Frame", "Shelf Units", "Drawer Modules", "Door Attachments"]
    },
    lounge: {
      title: "Lounge Configuration",
      description: "Create a comfortable seating area for relaxation or socializing",
      icon: <Sofa size={24} />,
      benefits: ["Converts from bed to seating in minutes", "Storage within seating", "Configurable for one person or guests"],
      modules: ["Base Frame", "Cushion Set", "Back Support", "Side Table Attachment"]
    }
  };

  const addOns = [
    { id: "lighting", name: "Smart Lighting", description: "Integrated LED lighting system with remote control", price: "$49" },
    { id: "power", name: "Power Hub", description: "Built-in USB and power outlets for your devices", price: "$39" },
    { id: "organizer", name: "Wall Organizer", description: "Attachable wall-mounted organization grid", price: "$29" },
    { id: "cushions", name: "Premium Cushions", description: "Memory foam cushions with washable covers", price: "$59" }
  ];
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Cog className="text-blue-600" />
            <h1 className="text-xl font-bold">ModuLiving</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="flex items-center gap-1">
              <Maximize size={14} />
              Space Optimizer
            </Badge>
            <Button variant="outline" size="sm" className="hidden md:flex items-center gap-1">
              <Save size={16} />
              Save Design
            </Button>
            <Button size="sm" className="flex items-center gap-1">
              Explore
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="shadow-lg h-full">
              <CardHeader className="border-b">
                <div className="flex justify-between items-center">
                  <CardTitle>{configurations[activeConfiguration].title}</CardTitle>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <ArrowLeftRight size={14} />
                    Transformable
                  </Badge>
                </div>
                <CardDescription>
                  {configurations[activeConfiguration].description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-gray-100 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FurnitureVisualization 
                      configuration={activeConfiguration} 
                      colorScheme={colors}
                      spaceEfficiency={spaceEfficiency}
                    />
                  </div>
                  
                  <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="opacity-90"
                      onClick={() => setSpaceEfficiency(Math.max(spaceEfficiency - 10, 0))}
                    >
                      <Minimize size={16} />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="opacity-90"
                      onClick={() => setSpaceEfficiency(Math.min(spaceEfficiency + 10, 100))}
                    >
                      <Maximize size={16} />
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t bg-gray-50">
                <div className="w-full pt-2">
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>Compact</span>
                    <span>Space Efficiency: {spaceEfficiency}%</span>
                    <span>Expanded</span>
                  </div>
                  <Slider 
                    value={[spaceEfficiency]} 
                    onValueChange={(value) => setSpaceEfficiency(value[0])}
                    max={100}
                    step={10}
                  />
                </div>
              </CardFooter>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Configuration Options</CardTitle>
                <CardDescription>Transform your furniture with a click</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <Tabs defaultValue={activeConfiguration} onValueChange={setActiveConfiguration}>
                  <TabsList className="grid grid-cols-4 mb-4">
                    <TabsTrigger value="bed" className="flex flex-col items-center py-2">
                      <Bed size={20} />
                      <span className="text-xs mt-1">Bed</span>
                    </TabsTrigger>
                    <TabsTrigger value="desk" className="flex flex-col items-center py-2">
                      <BookOpen size={20} />
                      <span className="text-xs mt-1">Desk</span>
                    </TabsTrigger>
                    <TabsTrigger value="storage" className="flex flex-col items-center py-2">
                      <Layers size={20} />
                      <span className="text-xs mt-1">Storage</span>
                    </TabsTrigger>
                    <TabsTrigger value="lounge" className="flex flex-col items-center py-2">
                      <Sofa size={20} />
                      <span className="text-xs mt-1">Lounge</span>
                    </TabsTrigger>
                  </TabsList>
                  
                  {Object.entries(configurations).map(([key, config]) => (
                    <TabsContent key={key} value={key} className="mt-0">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Key Benefits</h4>
                          <ul className="space-y-1">
                            {config.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <div className="mt-1 text-green-500">
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">Included Modules</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {config.modules.map((module, i) => (
                              <Badge key={i} variant="outline" className="justify-center py-1">
                                {module}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
            
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette size={20} />
                  Color Scheme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {Object.keys(colorSchemes).map(scheme => (
                    <Button 
                      key={scheme}
                      variant={colorScheme === scheme ? "default" : "outline"}
                      className="h-auto py-2 px-3 flex flex-col items-center"
                      onClick={() => setColorScheme(scheme)}
                    >
                      <div className="flex gap-1 mb-1">
                        <div style={{background: colorSchemes[scheme].primary}} className="w-3 h-3 rounded-full" />
                        <div style={{background: colorSchemes[scheme].secondary}} className="w-3 h-3 rounded-full" />
                        <div style={{background: colorSchemes[scheme].accent}} className="w-3 h-3 rounded-full" />
                      </div>
                      <span className="text-xs capitalize">{scheme}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Add-on Accessories</CardTitle>
                <CardDescription>Enhance your modular system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {addOns.map(addon => (
                    <div 
                      key={addon.id}
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                        selectedAddOn === addon.id ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedAddOn(selectedAddOn === addon.id ? null : addon.id)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{addon.name}</h4>
                          <p className="text-sm text-gray-500">{addon.description}</p>
                        </div>
                        <Badge variant="outline">{addon.price}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button className="w-full">Add Selected Accessories</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home size={20} />
                Perfect for Dorm Living
              </CardTitle>
              <CardDescription>
                See how our modular system maximizes your limited dorm space
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeatureCard 
                  icon={<Maximize />}
                  title="Space Efficiency"
                  description="Gain up to 70% more usable space compared to traditional furniture arrangements"
                />
                <FeatureCard 
                  icon={<Cog />}
                  title="Tool-Free Assembly"
                  description="No tools required - assemble and reconfigure in minutes with our intuitive locking system"
                />
                <FeatureCard 
                  icon={<Coffee />}
                  title="Multi-Functional"
                  description="One system replaces multiple furniture pieces, saving money and space"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Cog />
                ModuLiving
              </h3>
              <p className="text-gray-400 text-sm">
                Transforming small spaces with smart, modular furniture solutions for modern living.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Features</li>
                <li>Configurations</li>
                <li>Materials</li>
                <li>Sustainability</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Assembly Guide</li>
                <li>Space Planning</li>
                <li>Care Instructions</li>
                <li>FAQ</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>About Us</li>
                <li>Sustainability</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} ModuLiving. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Visualization component for the furniture
function FurnitureVisualization({ configuration, colorScheme, spaceEfficiency }) {
  const scale = 0.5 + (spaceEfficiency / 200); // Scale between 0.5 and 1
  
  const renderBed = () => (
    <div className="relative" style={{ transform: `scale(${scale})` }}>
      {/* Base frame */}
      <div style={{ 
        width: '300px', 
        height: '180px', 
        backgroundColor: colorScheme.secondary,
        borderRadius: '8px',
        position: 'relative',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        {/* Mattress */}
        <div style={{ 
          width: '280px', 
          height: '160px', 
          backgroundColor: colorScheme.light,
          borderRadius: '6px',
          position: 'absolute',
          top: '10px',
          left: '10px',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
        }}>
          {/* Pillow */}
          <div style={{ 
            width: '60px', 
            height: '40px', 
            backgroundColor: 'white',
            borderRadius: '4px',
            position: 'absolute',
            top: '10px',
            left: '10px',
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
          }}></div>
          
          {/* Blanket */}
          <div style={{ 
            width: '280px', 
            height: '80px', 
            backgroundColor: colorScheme.accent,
            opacity: 0.7,
            borderRadius: '4px',
            position: 'absolute',
            bottom: '0',
            left: '0',
          }}></div>
        </div>
        
        {/* Drawer */}
        <div style={{ 
          width: '90px', 
          height: '20px', 
          backgroundColor: colorScheme.primary,
          borderRadius: '3px',
          position: 'absolute',
          bottom: '10px',
          left: '20px',
          borderTop: `2px solid ${colorScheme.accent}`
        }}></div>
        
        <div style={{ 
          width: '90px', 
          height: '20px', 
          backgroundColor: colorScheme.primary,
          borderRadius: '3px',
          position: 'absolute',
          bottom: '10px',
          right: '20px',
          borderTop: `2px solid ${colorScheme.accent}`
        }}></div>
      </div>
      
      {/* Headboard */}
      <div style={{ 
        width: '300px', 
        height: '50px', 
        backgroundColor: colorScheme.primary,
        borderRadius: '8px 8px 0 0',
        position: 'absolute',
        bottom: '180px',
        boxShadow: '0 -2px 4px rgba(0,0,0,0.05)'
      }}>
        {/* Shelf detail */}
        <div style={{ 
          width: '80px', 
          height: '10px', 
          backgroundColor: colorScheme.secondary,
          position: 'absolute',
          top: '20px',
          left: '20px',
        }}></div>
        
        <div style={{ 
          width: '80px', 
          height: '10px', 
          backgroundColor: colorScheme.secondary,
          position: 'absolute',
          top: '20px',
          right: '20px',
        }}></div>
      </div>
    </div>
  );
  
  const renderDesk = () => (
    <div className="relative" style={{ transform: `scale(${scale})` }}>
      {/* Desk surface */}
      <div style={{ 
        width: '320px', 
        height: '20px', 
        backgroundColor: colorScheme.primary,
        borderRadius: '4px 4px 0 0',
        position: 'relative',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}></div>
      
      {/* Desk body */}
      <div style={{ 
        width: '300px', 
        height: '120px', 
        backgroundColor: colorScheme.secondary,
        borderRadius: '0 0 8px 8px',
        position: 'relative',
        top: '0',
        left: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        {/* Left drawer unit */}
        <div style={{ 
          width: '80px', 
          height: '100px', 
          backgroundColor: colorScheme.primary,
          borderRadius: '4px',
          position: 'absolute',
          top: '10px',
          left: '10px',
        }}>
          {/* Drawers */}
          <div style={{ 
            width: '70px', 
            height: '20px', 
            backgroundColor: colorScheme.light,
            borderRadius: '2px',
            position: 'absolute',
            top: '10px',
            left: '5px',
            borderTop: `2px solid ${colorScheme.accent}`
          }}></div>
          
          <div style={{ 
            width: '70px', 
            height: '20px', 
            backgroundColor: colorScheme.light,
            borderRadius: '2px',
            position: 'absolute',
            top: '40px',
            left: '5px',
            borderTop: `2px solid ${colorScheme.accent}`
          }}></div>
          
          <div style={{ 
            width: '70px', 
            height: '20px', 
            backgroundColor: colorScheme.light,
            borderRadius: '2px',
            position: 'absolute',
            top: '70px',
            left: '5px',
            borderTop: `2px solid ${colorScheme.accent}`
          }}></div>
        </div>
        
        {/* Chair space */}
        <div style={{ 
          width: '120px', 
          height: '80px', 
          backgroundColor: 'transparent',
          borderRadius: '0 0 4px 4px',
          position: 'absolute',
          bottom: '0',
          left: '100px',
          borderLeft: `2px dashed ${colorScheme.light}`,
          borderRight: `2px dashed ${colorScheme.light}`,
        }}></div>
        
        {/* Right storage */}
        <div style={{ 
          width: '80px', 
          height: '100px', 
          backgroundColor: colorScheme.primary,
          borderRadius: '4px',
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}>
          {/* Shelf */}
          <div style={{ 
            width: '80px', 
            height: '2px', 
            backgroundColor: colorScheme.accent,
            position: 'absolute',
            top: '30px',
            left: '0',
          }}></div>
          
          <div style={{ 
            width: '80px', 
            height: '2px', 
            backgroundColor: colorScheme.accent,
            position: 'absolute',
            top: '60px',
            left: '0',
          }}></div>
        </div>
      </div>
      
      {/* Desk lamp */}
      <div style={{ 
        width: '20px', 
        height: '50px', 
        backgroundColor: colorScheme.accent,
        position: 'absolute',
        top: '-50px',
        right: '30px',
      }}>
        <div style={{ 
          width: '30px', 
          height: '15px', 
          backgroundColor: colorScheme.light,
          borderRadius: '15px 15px 0 0',
          position: 'absolute',
          top: '-15px',
          left: '-5px',
          transform: 'rotate(-30deg)',
          boxShadow: 'inset 0 4px 8px rgba(255,255,255,0.5)'
        }}></div>
      </div>
      
      {/* Monitor */}
      <div style={{ 
        width: '100px', 
        height: '70px', 
        backgroundColor: 'black',
        borderRadius: '4px',
        position: 'absolute',
        top: '-90px',
        left: '110px',
        border: `3px solid ${colorScheme.secondary}`
      }}>
        <div style={{ 
          width: '10px', 
          height: '20px', 
          backgroundColor: colorScheme.secondary,
          position: 'absolute',
          bottom: '-20px',
          left: '45px',
        }}></div>
        <div style={{ 
          width: '30px', 
          height: '5px', 
          backgroundColor: colorScheme.secondary,
          position: 'absolute',
          bottom: '-25px',
          left: '35px',
        }}></div>
      </div>
    </div>
  );
  
  const renderStorage = () => (
    <div className="relative" style={{ transform: `scale(${scale})` }}>
      {/* Main storage unit */}
      <div style={{ 
        width: '300px', 
        height: '220px', 
        backgroundColor: colorScheme.primary,
        borderRadius: '8px',
        position: 'relative',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        {/* Vertical divider */}
        <div style={{ 
          width: '4px', 
          height: '220px', 
          backgroundColor: colorScheme.secondary,
          position: 'absolute',
          left: '150px',
          top: '0',
        }}></div>
        
        {/* Left side shelves */}
        <div style={{ 
          width: '146px', 
          height: '2px', 
          backgroundColor: colorScheme.secondary,
          position: 'absolute',
          left: '0',
          top: '73px',
        }}></div>
        
        <div style={{ 
          width: '146px', 
          height: '2px', 
          backgroundColor: colorScheme.secondary,
          position: 'absolute',
          left: '0',
          top: '146px',
        }}></div>
        
        {/* Right side - top drawer */}
        <div style={{ 
          width: '120px', 
          height: '60px', 
          backgroundColor: colorScheme.secondary,
          borderRadius: '4px',
          position: 'absolute',
          top: '20px',
          right: '15px',
        }}>
          <div style={{ 
            width: '40px', 
            height: '10px', 
            backgroundColor: colorScheme.light,
            borderRadius: '2px',
            position: 'absolute',
            top: '25px',
            left: '40px',
          }}></div>
        </div>
        
        {/* Right side - middle drawer */}
        <div style={{ 
          width: '120px', 
          height: '60px', 
          backgroundColor: colorScheme.secondary,
          borderRadius: '4px',
          position: 'absolute',
          top: '90px',
          right: '15px',
        }}>
          <div style={{ 
            width: '40px', 
            height: '10px', 
            backgroundColor: colorScheme.light,
            borderRadius: '2px',
            position: 'absolute',
            top: '25px',
            left: '40px',
          }}></div>
        </div>
        
        {/* Right side - bottom drawer */}
        <div style={{ 
          width: '120px', 
          height: '60px', 
          backgroundColor: colorScheme.secondary,
          borderRadius: '4px',
          position: 'absolute',
          top: '160px',
          right: '15px',
        }}>
          <div style={{ 
            width: '40px', 
            height: '10px', 
            backgroundColor: colorScheme.light,
            borderRadius: '2px',
            position: 'absolute',
            top: '25px',
            left: '40px',
          }}></div>
        </div>
        
        {/* Items on shelves */}
        <div style={{ 
          width: '30px', 
          height: '50px', 
          backgroundColor: colorScheme.accent,
          position: 'absolute',
          top: '15px',
          left: '20px',
        }}></div>
        
        <div style={{ 
          width: '40px', 
          height: '30px', 
          backgroundColor: colorScheme.light,
          position: 'absolute',
          top: '25px',
          left: '60px',
        }}></div>
        
        <div style={{ 
          width: '50px', 
          height: '40px', 
          backgroundColor: colorScheme.accent,
          opacity: 0.7,
          position: 'absolute',
          top: '90px',
          left: '30px',
        }}></div>
        
        <div style={{ 
          width: '35px', 
          height: '35px', 
          backgroundColor: colorScheme.light,
          borderRadius: '50%',
          position: 'absolute',
          top: '170px',
          left: '40px',
        }}></div>
      </div>
    </div>
  );
  
  const renderLounge = () => (
    <div className="relative" style={{ transform: `scale(${scale})` }}>
      {/* Sofa base */}
      <div style={{ 
        width: '300px', 
        height: '100px', 
        backgroundColor: colorScheme.secondary,
        borderRadius: '8px 8px 0 0',
        position: 'relative',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        {/* Seat cushions */}
        <div style={{ 
          width: '280px', 
          height: '30px', 
          backgroundColor: colorScheme.light,
          borderRadius: '4px',
          position: 'absolute',
          top: '10px',
          left: '10px',
        }}></div>
        
        {/* Back cushions */}
        <div style={{ 
          width: '280px', 
          height: '50px', 
          backgroundColor: colorScheme.accent,
          borderRadius: '4px 4px 0 0',
          position: 'absolute',
          bottom: '0',
          left: '10px',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
        }}>
          {/* Cushion divider */}
          <div style={{ 
            width: '2px', 
            height: '50px', 
            backgroundColor: colorScheme.secondary,
            position: 'absolute',
            left: '140px',
          }}></div>
        </div>
      </div>
      
      {/* Sofa legs */}
      <div style={{ 
        width: '20px', 
        height: '20px', 
        backgroundColor: colorScheme.primary,
        position: 'absolute',
        bottom: '-20px',
        left: '30px',
      }}></div>
      
      <div style={{ 
        width: '20px', 
        height: '20px', 
        backgroundColor: colorScheme.primary,
        position: 'absolute',
        bottom: '-20px',
        right: '30px',
      }}></div>
      
      {/* Side table */}
      <div style={{ 
        width: '80px', 
        height: '60px', 
        backgroundColor: colorScheme.primary,
        borderRadius: '4px',
        position: 'absolute',
        bottom: '-10px',
        right: '-90px',
      }}>
        {/* Coffee mug */}
        <div style={{ 
          width: '20px', 
          height: '15px', 
          backgroundColor: colorScheme.light,
          borderRadius: '3px 3px 10px 10px',
          position: 'absolute',
          top: '10px',
          left: '30px',
        }}></div>
        
        {/* Book */}
        <div style={{ 
          width: '30px', 
          height: '5px', 
          backgroundColor: colorScheme.accent,
          position: 'absolute',
          top: '35px',
          left: '25px',
        }}></div>
      </div>
      
      {/* Decorative pillow */}
      <div style={{ 
        width: '30px', 
        height: '30px', 
        backgroundColor: colorScheme.light,
        borderRadius: '4px',
        position: 'absolute',
        top: '-20px',
        left: '20px',
        transform: 'rotate(15deg)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}></div>
    </div>
  );
  
  const renderers = {
    bed: renderBed,
    desk: renderDesk,
    storage: renderStorage,
    lounge: renderLounge
  };
  
  return (
    <div className="flex items-center justify-center w-full h-full">
      {renderers[configuration]()}
    </div>
  );
}

// Feature card component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="text-blue-500 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
}