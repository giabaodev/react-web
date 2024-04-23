import Input from '@/components/Input';
import Layout from '../Layout';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ShadcnInput } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';

export default function Login() {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <Layout>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            B&B Store Management
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
          <Input label="Email" type="email" />
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="relative">
              <div
                onClick={() => setVisible(!visible)}
                className="cursor-pointer"
              >
                {visible ? (
                  <EyeOpenIcon className="absolute top-[30%] right-[5%]" />
                ) : (
                  <EyeClosedIcon className="absolute top-[30%] right-[5%]" />
                )}
              </div>
              <ShadcnInput type={visible ? 'text' : 'password'} />
            </div>
          </div>

          <div>
            <Button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Sign in
            </Button>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account? <span> </span>
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
