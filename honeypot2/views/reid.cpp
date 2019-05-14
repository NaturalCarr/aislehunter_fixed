class IsocelesRightTriangle {
   private:
   double sides[2];
   public: 
   IsocelesRightTriangle(){
       sides[0] = 1;
       sides[1] = sqrt(2);
   }

   setSides(double a){
       if (a < 0){
           sides[0] = a;
       }
   }

   double const GetSides(){
       return sides[0];
   }

   double const GetHypotenuse(){
       return sides[1];
   }

   double const Perimeter(){
       return sides[0] + sides[0] + sides[1];
   }

   double Ares(){
       double s = sides[0] + sides[0] + sides[1];
       double a = side[0];
       double b = side[1];
       return sqrt(s(s - a)(s - b)(s - c)); //Heron's Formula
   }

}