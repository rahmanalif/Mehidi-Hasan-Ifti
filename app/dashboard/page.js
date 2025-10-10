
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Dashboard() {
  return (
    (<div
      className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      <header
        className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Dashboard</h1>
        <Button variant="outline">Logout</Button>
      </header>
      <main className="flex-1 p-6 space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Hero Section</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="hero-headline">Headline</Label>
              <Input id="hero-headline" placeholder="Enter headline" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hero-description">Description</Label>
              <Textarea id="hero-description" placeholder="Enter description" rows={3} />
            </div>
          </div>
          <Button className="mt-4">Save Changes</Button>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">About Me</h2>
          <div className="space-y-2">
            <Label htmlFor="about-content">Content</Label>
            <Textarea id="about-content" placeholder="Enter about me content" rows={5} />
          </div>
          <Button className="mt-4">Save Changes</Button>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">How I Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="help-item-1">Service 1</Label>
              <Input id="help-item-1" placeholder="Enter service name" />
              <Textarea id="help-item-1-desc" placeholder="Enter service description" rows={3} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="help-item-2">Service 2</Label>
              <Input id="help-item-2" placeholder="Enter service name" />
              <Textarea id="help-item-2-desc" placeholder="Enter service description" rows={3} />
            </div>
          </div>
          <Button className="mt-4">Save Changes</Button>
        </section>
      </main>
    </div>)
  );
}
