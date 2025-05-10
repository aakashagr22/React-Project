
import React, { useState } from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';
import { Form, FormField, FormItem, FormControl, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import TravelOption from './TravelOption';
import StatusBar from './StatusBar';

interface FormValues {
  destination: string;
  duration: string;
  travelOption: string;
}

const WebForm: React.FC = () => {
  const [travelOption, setTravelOption] = useState<string>('solo');
  
  const form = useForm<FormValues>({
    defaultValues: {
      destination: '',
      duration: '',
      travelOption: 'solo',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);

    // Here you would handle the form submission, e.g. sending to a backend API
  };

  return (
<div className="h-full w-full">
<StatusBar />
    <div className="p-6 bg-black text-white max-sm:p-4"> {/* Mobile override */}
      <h2 className="text-2xl font-bold max-sm:text-xl">Plan Your Journey, Your Way!</h2>
      <p className="text-sm text-blue-200 mt-1 max-sm:text-xs">Let's create your personalized travel plan</p>
    </div>
    
    <div className="p-6 flex-1 max-sm:p-4"> {/* Mobile override */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-sm:space-y-4"> {/* Mobile override */}
          <FormField
            control={form.control}
            name="destination"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white font-medium">Where would you like to go?</FormLabel>
                <FormControl>
                  <div className="flex items-center text-white gap-2 bg-slate-700 rounded-full px-4 py-2 max-sm:px-3">
                    <MapPin className="h-5 w-5 text-gray-100 " />
                    <Input
                      {...field}
                      placeholder="Enter Destination"
                      className="  text-white flex-1"
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-100 font-medium">How long will you stay?</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger className=" bg-slate-700 rounded-full ">
                      <Calendar className="h-7 w-5 text-gray-100 max-sm:h-4 max-sm:w-4" />
                      <SelectValue placeholder="Select Duration" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="3-5days">3-5 days</SelectItem>
                    <SelectItem value="1week">1 week</SelectItem>
                    <SelectItem value="2weeks">2 weeks</SelectItem>
                    <SelectItem value="1month">1 month</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          
          <div>
            <FormLabel className="text-gray-100 font-medium">Who are you traveling with?</FormLabel>
            <div className="grid grid-cols-4 gap-4 mt-2 max-sm:grid-cols-2 max-sm:gap-3">
              <TravelOption 
                icon={<Users className="h-5 w-5 max-sm:h-4 max-sm:w-4" />} 
                label="Solo" 
                selected={travelOption === 'solo'}
                onClick={() => {
                  setTravelOption('solo');
                  form.setValue('travelOption', 'solo');
                }}
                className="p-3 max-sm:p-2"
              />
              <TravelOption 
                icon={<Users className="h-5 w-5 max-sm:h-4 max-sm:w-4" />} 
                label="Couple" 
                selected={travelOption === 'couple'}
                onClick={() => {
                  setTravelOption('couple');
                  form.setValue('travelOption', 'couple');
                }}
                className="p-3 max-sm:p-2"
              />
              <TravelOption 
                icon={<Users className="h-5 w-5 max-sm:h-4 max-sm:w-4" />} 
                label="Family" 
                selected={travelOption === 'family'}
                onClick={() => {
                  setTravelOption('family');
                  form.setValue('travelOption', 'family');
                }}
                className="p-3 max-sm:p-2"
              />
              <TravelOption 
                icon={<Users className="h-5 w-5 max-sm:h-4 max-sm:w-4" />} 
                label="Friends" 
                selected={travelOption === 'friends'}
                onClick={() => {
                  setTravelOption('friends');
                  form.setValue('travelOption', 'friends');
                }}
                className="p-3 max-sm:p-2"
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-travel-blue hover:bg-blue-700 rounded-full py-6 text-white font-medium mt-8 max-sm:py-4 max-sm:mt-6"
          >
            Continue
          </Button>
        </form>
      </Form>
    </div>
  </div>
  );
};

export default WebForm;
